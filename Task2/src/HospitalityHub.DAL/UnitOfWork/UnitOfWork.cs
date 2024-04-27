using HospitalityHub.Core.Entities;
using HospitalityHub.DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace HospitalityHub.DAL.UnitOfWork;

public class UnitOfWork : IUnitOfWork
{
    private readonly Lazy<IGenericRepository<User>> _userRepository;
    private readonly ApplicationDbContext _context;

    public UnitOfWork(
        Lazy<IGenericRepository<User>> userRepository,
        ApplicationDbContext context)
    {
        _userRepository = userRepository;
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    public IGenericRepository<User> UserRepository => _userRepository.Value;

    public Task<IDbContextTransaction> CreateTransactionAsync()
    {
        return _context.Database.BeginTransactionAsync();
    }
    
    public IDbContextTransaction CreateTransaction()
    {
        return _context.Database.BeginTransaction();
    }

    public Task CommitTransactionAsync()
    {
        return _context.Database.CommitTransactionAsync();
    }
    
    public void CommitTransaction()
    {
        _context.Database.CommitTransaction();
    }

    public Task RollbackTransactionAsync()
    {
        if (_context.Database.CurrentTransaction != null)
            return _context.Database.RollbackTransactionAsync();

        return Task.CompletedTask;
    }
    
    public void RollbackTransaction()
    {
        if (_context.Database.CurrentTransaction != null)
            _context.Database.RollbackTransaction();
    }

    public async Task SaveAsync()
    {
        await _context.SaveChangesAsync();

        _context.Database.CurrentTransaction?.Dispose();
    }
    
    public void Save()
    {
        _context.SaveChanges();

        _context.Database.CurrentTransaction?.Dispose();
    }
    
    public async Task ExecuteSqlRawAsync(string sql, params object[] parameters)
    {
        await _context.Database.ExecuteSqlRawAsync(sql, parameters);
    }
}
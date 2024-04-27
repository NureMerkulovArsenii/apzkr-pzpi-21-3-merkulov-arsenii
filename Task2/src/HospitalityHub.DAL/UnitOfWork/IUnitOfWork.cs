using HospitalityHub.Core.Entities;
using HospitalityHub.DAL.Repositories;
using Microsoft.EntityFrameworkCore.Storage;

namespace HospitalityHub.DAL.UnitOfWork;

public interface IUnitOfWork
{
    public IGenericRepository<User> UserRepository { get; }
    
    Task<IDbContextTransaction> CreateTransactionAsync();

    IDbContextTransaction CreateTransaction();

    Task SaveAsync();

    void Save();

    Task CommitTransactionAsync();

    void CommitTransaction();

    Task RollbackTransactionAsync();

    void RollbackTransaction();

    Task ExecuteSqlRawAsync(string sql, params object[] parameters);
}
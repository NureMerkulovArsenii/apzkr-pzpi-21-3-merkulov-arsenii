using HospitalityHub.Core.Entities;
using HospitalityHub.DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace HospitalityHub.DAL.UnitOfWork;

public class UnitOfWork : IUnitOfWork
{
    private readonly Lazy<IGenericRepository<Room>> _roomRepository;
    private readonly Lazy<IGenericRepository<Booking>> _bookingRepository;
    private readonly Lazy<IGenericRepository<Hotel>> _hotelRepository;
    private readonly Lazy<IGenericRepository<Photo>> _photoRepository;
    private readonly Lazy<IGenericRepository<RoomPlace>> _roomPlaceRepository;
    private readonly Lazy<IGenericRepository<TodoTask>> _todoTaskRepository;
    private readonly Lazy<IGenericRepository<Customer>> _customerRepository;
    private readonly Lazy<IGenericRepository<Staff>> _staffRepository;
    private readonly ApplicationDbContext _context;

    public UnitOfWork(
        Lazy<IGenericRepository<Room>> roomRepository,
        Lazy<IGenericRepository<Booking>> bookingRepository,
        Lazy<IGenericRepository<Hotel>> hotelRepository,
        Lazy<IGenericRepository<Photo>> photoRepository,
        Lazy<IGenericRepository<RoomPlace>> roomPlaceRepository,
        Lazy<IGenericRepository<TodoTask>> todoTaskRepository,
        Lazy<IGenericRepository<Customer>> customerRepository,
        Lazy<IGenericRepository<Staff>> staffRepository,
        ApplicationDbContext context)
    {
        _roomRepository = roomRepository;
        _bookingRepository = bookingRepository;
        _hotelRepository = hotelRepository;
        _photoRepository = photoRepository;
        _roomPlaceRepository = roomPlaceRepository;
        _todoTaskRepository = todoTaskRepository;
        _customerRepository = customerRepository;
        _staffRepository = staffRepository;
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    public IGenericRepository<Booking> BookingRepository => _bookingRepository.Value;
    public IGenericRepository<Hotel> HotelRepository => _hotelRepository.Value;
    public IGenericRepository<Room> RoomRepository => _roomRepository.Value;
    public IGenericRepository<Photo> PhotoRepository => _photoRepository.Value;
    public IGenericRepository<RoomPlace> RoomPlaceRepository => _roomPlaceRepository.Value;
    public IGenericRepository<TodoTask> TodoTaskRepository => _todoTaskRepository.Value;
    public IGenericRepository<Customer> CustomerRepository => _customerRepository.Value;
    public IGenericRepository<Staff> StaffRepository => _staffRepository.Value;


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
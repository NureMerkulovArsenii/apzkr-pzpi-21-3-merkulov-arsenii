using HospitalityHub.Core.Entities;
using HospitalityHub.DAL.Repositories;
using Microsoft.EntityFrameworkCore.Storage;

namespace HospitalityHub.DAL.UnitOfWork;

public interface IUnitOfWork
{
    public IGenericRepository<Booking> BookingRepository { get; }
    public IGenericRepository<Hotel> HotelRepository { get; }
    public IGenericRepository<Room> RoomRepository { get; }
    public IGenericRepository<Photo> PhotoRepository { get; }
    public IGenericRepository<RoomPlace> RoomPlaceRepository { get; }
    public IGenericRepository<TodoTask> TodoTaskRepository { get; }
    public IGenericRepository<Customer> CustomerRepository { get; }
    

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
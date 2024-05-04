using System.Linq.Expressions;
using HospitalityHub.Core.Entities;
using Microsoft.EntityFrameworkCore.Query;

namespace HospitalityHub.DAL.Repositories;

public interface IGenericRepository<TEntity> where TEntity : IBaseEntity
{
    /// <summary>
    /// Returns IQueryable of TEntity.
    /// </summary>
    /// <returns>returns <see cref="IQueryable{TEntity}"/> </returns>
    IQueryable<TEntity> GetAll();


    /// <summary>
    /// Returns IQueryable of TEntity.
    /// </summary>
    /// <returns>returns <see cref="IQueryable{TEntity}"/> </returns>
    IQueryable<TEntity> GetAllByCondition(Expression<Func<TEntity, bool>> predicate);

    /// <summary>
    /// Returns first or default entity that pass the predicate condition. 
    /// </summary>
    /// <param name="predicate"></param>
    /// <param name="cancellationToken"></param>
    /// <returns></returns>
    Task<TEntity> FirstOrDefaultAsync(Expression<Func<TEntity, bool>> predicate,
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Returns first or default entity that pass the predicate condition.
    /// </summary>
    /// <param name="predicate"></param>
    /// <returns></returns>
    TEntity FirstOrDefault(Expression<Func<TEntity, bool>> predicate);

    /// <summary>
    /// Asynchronously returns TEntity from database requested by id parameter.
    /// </summary>
    /// <param name="id">Parameter that represents id of the entity ib database.</param>
    /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
    Task<TEntity> GetByIdAsync<T>(T id);

    /// <summary>
    /// Asynchronously returns IEnumerable of entities that pass the predicate condition.
    /// </summary>
    /// <param name="predicate">Predicate that accepts equation an return bool value that indicates if the expression is true.</param>
    /// <param name="cancellationToken">Cancellation token to cancel task.</param>
    /// <param name="selector">Selector value that accepts the expression that defines what tables should be joined ot the requested object.</param>
    /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
    Task<IList<TEntity>> GetByConditionAsync(
        Expression<Func<TEntity, bool>> predicate,
        Expression<Func<TEntity, TEntity>> selector = null,
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Asynchronously checks if enitity with predicate value exists in database.
    /// </summary>
    /// <param name="predicate">Predicate that accepts equation an return bool value that indicates if the expression is true.</param>
    /// <param name="cancellationToken">Cancellation token to cancel task.</param>
    /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
    Task<bool> ExistAsync(Expression<Func<TEntity, bool>>? predicate, CancellationToken cancellationToken = default);

    /// <summary>
    /// Asynchronously adds object of TEntity to database.
    /// </summary>
    /// <param name="obj">TEntity obj param.</param>
    /// <param name="cancellationToken">Cancellation token to cancel task.</param>
    /// <returns>A <see cref="Task"/> representing the result of the asynchronous operation.</returns>
    Task AddAsync(TEntity obj, CancellationToken cancellationToken = default);

    /// <summary>
    /// Adds object of TEntity to database. 
    /// </summary>
    /// <param name="obj"></param>
    void Add(TEntity obj);

    /// <summary>
    /// Asynchronously adds object of TEntity to database.
    /// </summary>
    /// <param name="obj">TEntity obj param.</param>
    /// <param name="cancellationToken">Cancellation token to cancel task.</param>
    /// <returns>A <see cref="Task"/> representing the result of the asynchronous operation.</returns>
    Task AddRangeAsync(IEnumerable<TEntity> obj, CancellationToken cancellationToken = default);

    /// <summary>
    /// Adds objects of TEntity to database. 
    /// </summary>
    /// <param name="entities"></param>
    void AddRange(IEnumerable<TEntity> entities);

    /// <summary>
    /// Updates TEntity, passed as parameter.
    /// </summary>
    /// <param name="obj">TEntity object to be updated.</param>
    void Update(TEntity obj);

    /// <summary>
    /// Updates list of TEntity Type, passed as parameter. 
    /// </summary>
    /// <param name="entities"></param>
    void UpdateRange(IEnumerable<TEntity> entities);

    /// <summary>
    /// Removes entity from database.
    /// </summary>
    /// <param name="obj">TEntity obj param.</param>
    void Delete(TEntity obj);

    /// <summary>
    /// Removes entities by query from database. 
    /// </summary>
    /// <returns>Number of deleted entities.</returns>
    Task<int> DeleteAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default);

    /// <summary>
    /// Removes entities by query from database. 
    /// </summary>
    /// <returns>Number of rows affected.</returns>
    Task<int> ExecuteDeleteAsync(Expression<Func<TEntity, bool>> predicate,
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Executes update of entities that fall under the <paramref name="predicate"/>
    /// condition against database and updates the properties of the entity with the values
    /// <paramref name="setPropertyCalls"/>
    /// </summary>
    /// <param name="predicate">Condition to filter rows for update.</param>
    /// <param name="setPropertyCalls">Property calls set</param>
    /// <param name="cancellationToken">Cancellation token.</param>
    /// <returns>Number of rows modified.</returns>
    Task<int> ExecuteUpdateAsync(Expression<Func<TEntity, bool>> predicate,
        Expression<Func<SetPropertyCalls<TEntity>, SetPropertyCalls<TEntity>>> setPropertyCalls,
        CancellationToken cancellationToken = default);
}
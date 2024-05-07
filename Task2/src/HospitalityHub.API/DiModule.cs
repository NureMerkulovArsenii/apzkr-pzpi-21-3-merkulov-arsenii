using Autofac;
using HospitalityHub.DAL.Repositories;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.DoorLockServiceProxy;

namespace HospitalityHub.API;

public class DiModule : Module
{
    private readonly IConfiguration _configuration;

    public DiModule(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    protected override void Load(ContainerBuilder builder)
    {
        builder.RegisterGeneric(typeof(GenericRepository<>)).As(typeof(IGenericRepository<>)).InstancePerLifetimeScope();
        builder.RegisterType<UnitOfWork>().As<IUnitOfWork>().InstancePerLifetimeScope();
        
        RegisterHandlers(builder);
        
        RegisterServiceProxies(builder);

        // builder.RegisterType<Seeder>()
        //     .As<ISeeder>()
        //     .SingleInstance();
    }

    private void RegisterHandlers(ContainerBuilder builder)
    {
        var handlersAssembly = typeof(BLL.IAssemblyMarker).Assembly;
        builder.RegisterAssemblyTypes(handlersAssembly)
            .Where(t => t.Name.EndsWith("Handler"))
            .InstancePerDependency();
    }
    
    private void RegisterServiceProxies(ContainerBuilder builder)
    {
       builder.RegisterType<DoorLockServiceProxy.DoorLockServiceProxy>()
           .As<IDoorLockServiceProxy>()
           .InstancePerLifetimeScope();
    }
    
}
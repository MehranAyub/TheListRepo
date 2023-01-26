using Core.Application.ListRepo;
using Core.Application.ProductRepo;
using Core.Application.UserRepo;

namespace Core.Application
{
    public interface IRepositoryWrapper
    {
        IUserRepository User { get; }
        IListRepository List { get; }
        IProductRepositorty Product { get; }
        void Save();
    }
}
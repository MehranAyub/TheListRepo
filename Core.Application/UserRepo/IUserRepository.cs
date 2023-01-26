using Core.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.UserRepo
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAllUsers();
        Task<User> GetUserById(Guid id);
        void CreateUser(User user);
    }
}

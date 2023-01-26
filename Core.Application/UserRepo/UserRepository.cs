using Core.Data;
using Core.Data.BaseRepository;
using Core.Data.Entities;
using Grpc.Core;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.UserRepo
{
    internal class UserRepository : RepositoryBase<User>, IUserRepository
    {
        public UserRepository(RepositoryContext repositoryContext)
             : base(repositoryContext)
        {
        }

        public IEnumerable<User> GetAllUsers()
        {
            return GetAll().ToList();
        }

        public async Task<User> GetUserById(Guid Id)
        {
            return await FindByCondition(User => User.Id.Equals(Id)).FirstOrDefaultAsync();
        }
        public void CreateUser(User user)
        {          
                Create(user);
        }
    }
}

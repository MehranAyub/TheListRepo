using Core.Data;
using Core.Data.BaseRepository;
using Core.Data.Entities;
using Grpc.Core;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.ListRepo
{
    internal class ListRepository : RepositoryBase<List>, IListRepository
    {
        public ListRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }

        public IEnumerable<List> GetMyLists(Guid userId)
        {
            return RepositoryContext.List.Where(n=>n.UserId==userId).ToList();
            
        }

        public List GetListById(Guid id)
        {
            return FindByCondition(List => List.Id.Equals(id)).FirstOrDefault();
        }
        public List UpdateList(List list)
        {
           var result= RepositoryContext.List.Where(n=>n.Id==list.Id).Include(n=>n.ListItems).Include(n=>n.LinkItems).AsNoTracking().FirstOrDefault();
            result.LinkItems = list.LinkItems.Where(n=>n.Id==Guid.Empty).ToList();
            result.ListItems = list.ListItems.Where(n=>n.Id==Guid.Empty).ToList();
             RepositoryContext.Update(result);
            return result;
        }

        public void CreateList(List list)
        {
          Create(list);
        }
    }
}

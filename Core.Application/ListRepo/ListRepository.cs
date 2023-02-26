using Core.Data;
using Core.Data.BaseRepository;
using Core.Data.Entities;
using Grpc.Core;
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

        public void CreateList(List list)
        {
          Create(list);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Data.Entities
{
    public class List
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = String.Empty;
        public List<ListItems>? ListItems { get; set; } = new List<ListItems>();
        public List<LinkItems>? LinkItems { get; set; } = new List<LinkItems>();
        public Guid UserId { get; set; }
        public User User { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Data.Entities
{
    public class LinkItems
    {
        public Guid Id { get; set; }
        public string? Title { get; set; } = String.Empty;
        public string? Link { get; set; }=String.Empty;
        public int Quantity { get; set; }
        public Guid? ListId { get; set; }
        public List? List { get; set; }
    }
}

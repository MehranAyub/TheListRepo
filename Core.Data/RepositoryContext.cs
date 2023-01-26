using Core.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace Core.Data
{
    public class RepositoryContext:DbContext
    {
        public RepositoryContext(DbContextOptions options)
     : base(options)
        {

        }
        public DbSet<Product> Product { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<List> List { get; set; }
        public DbSet<ListItems> ListItem { get; set; }
        public DbSet<LinkItems> LinkItem { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Product>().HasOne(p => p.Category).WithMany().HasForeignKey(n => n.CategoryId);

            modelBuilder.Entity<List>().HasMany(n=>n.ListItems).WithOne(a => a.List).HasForeignKey(n => n.ListId);
            modelBuilder.Entity<List>().HasMany(n => n.LinkItems).WithOne(a => a.List).HasForeignKey(n => n.ListId);
            modelBuilder.Entity<User>().HasMany(n=>n.Lists).WithOne(a => a.User).HasForeignKey(n => n.UserId);
            
            modelBuilder.Entity<LinkItems>().Ignore(n => n.List); //to Avoid cycle in tables becuase when both tables has Navigateion properties then cycle has been creates
            modelBuilder.Entity<List>().Ignore(n => n.User);
            modelBuilder.Entity<ListItems>().Ignore(n => n.List);

        }

    }
}
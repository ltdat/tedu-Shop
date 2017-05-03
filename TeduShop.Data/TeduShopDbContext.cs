using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeduShop.Model.Models;

namespace TeduShop.Data
{
    public class TeduShopDbContext:DbContext
    {
        public TeduShopDbContext() : base("TeduShopConnection")
        {
            this.Configuration.LazyLoadingEnabled = false;

        }
        public DbSet<Footer> Footers { set; get; }
        public DbSet<Menu> Menus { set; get; }
        public DbSet<MenuGroup> MenuGroups { set; get; }
        public DbSet<Footer> Footers { set; get; }
        public DbSet<Footer> Footers { set; get; }

    }
}

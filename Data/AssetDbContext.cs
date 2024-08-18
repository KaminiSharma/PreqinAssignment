using System;
using Microsoft.EntityFrameworkCore;
using PreqinAssignment.Model;

namespace PreqinAssignment.Data
{
	public class AssetDbContext :DbContext
	{
		public AssetDbContext(DbContextOptions<AssetDbContext> options) : base(options)
		{
		}
       
        public DbSet<AssetDb>
     Assets

        { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AssetDb>()
                .HasKey(i => i.asset_id);
        }

    }
}


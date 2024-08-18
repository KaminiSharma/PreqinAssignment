using System;
using Microsoft.EntityFrameworkCore;
using PreqinAssignment.Model;


namespace PreqinAssignment.Data
{
	public class InvestorDbContext : DbContext
	{
        public InvestorDbContext(DbContextOptions<InvestorDbContext> options) : base(options)
        {
        }


        public DbSet<InvestorDb>
 Investor
        { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<InvestorDb>()
                .HasKey(i => i.investor_id);
        }
    }
}


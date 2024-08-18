using System;
using Microsoft.EntityFrameworkCore;
using PreqinAssignment.Model;

namespace PreqinAssignment.Data
{
	public class CommitmentDbContext : DbContext
    {
		public CommitmentDbContext(DbContextOptions<CommitmentDbContext> options) : base(options)
        {
		}
        public DbSet<CommitmentsDb>
     commitments

        { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CommitmentsDb>()
                .HasKey(i => i.commitment_id);
        }
       
    }
}


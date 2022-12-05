using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Bikeapi.Models;

public partial class BikedbContext : DbContext
{
    public BikedbContext()
    {
    }

    public BikedbContext(DbContextOptions<BikedbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<BikeLoan> BikeLoans { get; set; }

   

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
{
    
}
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BikeLoan>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__BikeLoan__3214EC07106DD798");

            entity.ToTable("BikeLoan");

            entity.Property(e => e.ConfirmPassword)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.UserName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

                OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

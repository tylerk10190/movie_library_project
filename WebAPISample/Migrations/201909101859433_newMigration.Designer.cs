// <auto-generated />
namespace WebAPISample.Migrations
{
    using System.CodeDom.Compiler;
    using System.Data.Entity.Migrations;
    using System.Data.Entity.Migrations.Infrastructure;
    using System.Resources;
    
    [GeneratedCode("EntityFramework.Migrations", "6.2.0-61023")]
<<<<<<< HEAD:WebAPISample/Migrations/201909101859433_newMigration.Designer.cs
    public sealed partial class newMigration : IMigrationMetadata
    {
        private readonly ResourceManager Resources = new ResourceManager(typeof(newMigration));
        
        string IMigrationMetadata.Id
        {
            get { return "201909101859433_newMigration"; }
=======
    public sealed partial class InitialMigrations : IMigrationMetadata
    {
        private readonly ResourceManager Resources = new ResourceManager(typeof(InitialMigrations));
        
        string IMigrationMetadata.Id
        {
            get { return "201909101857386_InitialMigrations"; }
>>>>>>> d17ddf366c9f2a9c4b9e065f6d32f1134eafaa1b:WebAPISample/Migrations/201909101857386_InitialMigrations.Designer.cs
        }
        
        string IMigrationMetadata.Source
        {
            get { return null; }
        }
        
        string IMigrationMetadata.Target
        {
            get { return Resources.GetString("Target"); }
        }
    }
}
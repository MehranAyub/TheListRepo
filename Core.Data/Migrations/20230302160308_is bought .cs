using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Core.Data.Migrations
{
    /// <inheritdoc />
    public partial class isbought : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "ListItem");

            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "LinkItem");

            migrationBuilder.AddColumn<bool>(
                name: "IsBought",
                table: "LinkItem",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsBought",
                table: "LinkItem");

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "ListItem",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "LinkItem",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}

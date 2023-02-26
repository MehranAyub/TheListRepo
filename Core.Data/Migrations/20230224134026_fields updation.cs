using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Core.Data.Migrations
{
    /// <inheritdoc />
    public partial class fieldsupdation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ListItem_Product_ProductId",
                table: "ListItem");

            migrationBuilder.DropIndex(
                name: "IX_ListItem_ProductId",
                table: "ListItem");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "ListItem");

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "ListItem",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsBought",
                table: "ListItem",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Price",
                table: "ListItem",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "StoreLink",
                table: "ListItem",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "ListItem");

            migrationBuilder.DropColumn(
                name: "IsBought",
                table: "ListItem");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "ListItem");

            migrationBuilder.DropColumn(
                name: "StoreLink",
                table: "ListItem");

            migrationBuilder.AddColumn<Guid>(
                name: "ProductId",
                table: "ListItem",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_ListItem_ProductId",
                table: "ListItem",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_ListItem_Product_ProductId",
                table: "ListItem",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Core.Data.Migrations
{
    /// <inheritdoc />
    public partial class finalModelChange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LinkItem_List_ListId",
                table: "LinkItem");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Product",
                newName: "Price");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "ListItem",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "List",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "Date",
                table: "List",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "List",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Occasion",
                table: "List",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "LinkItem",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<Guid>(
                name: "ListId",
                table: "LinkItem",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AlterColumn<string>(
                name: "Link",
                table: "LinkItem",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "LinkItem",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ListItem_ProductId",
                table: "ListItem",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_LinkItem_List_ListId",
                table: "LinkItem",
                column: "ListId",
                principalTable: "List",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ListItem_Product_ProductId",
                table: "ListItem",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LinkItem_List_ListId",
                table: "LinkItem");

            migrationBuilder.DropForeignKey(
                name: "FK_ListItem_Product_ProductId",
                table: "ListItem");

            migrationBuilder.DropIndex(
                name: "IX_ListItem_ProductId",
                table: "ListItem");

            migrationBuilder.DropColumn(
                name: "Date",
                table: "List");

            migrationBuilder.DropColumn(
                name: "Note",
                table: "List");

            migrationBuilder.DropColumn(
                name: "Occasion",
                table: "List");

            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "LinkItem");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "Product",
                newName: "Description");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "ListItem",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "List",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "LinkItem",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "ListId",
                table: "LinkItem",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Link",
                table: "LinkItem",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_LinkItem_List_ListId",
                table: "LinkItem",
                column: "ListId",
                principalTable: "List",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

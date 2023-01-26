using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Core.Data.Migrations
{
    /// <inheritdoc />
    public partial class addedListMig : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_List_UserId",
                table: "List",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_List_User_UserId",
                table: "List",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_List_User_UserId",
                table: "List");

            migrationBuilder.DropIndex(
                name: "IX_List_UserId",
                table: "List");
        }
    }
}

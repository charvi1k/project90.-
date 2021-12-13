function adduser()
{
   player_1name = document.getElementById("name_1input").Value;
   player_2name = document.getElementById("name_2input").Value;

   localStorage.setItem("player_1name", player_1name);
   localStorage.setItem("player_2name", player_2name);

   window.location = "game_page.html";
}
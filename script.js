function game()
{
  let that = this;
  this.player_list = [];
  this.inc_valid = true;
  this.game_element = document.createElement("div");
  this.message = document.createElement("div");
  this.reset = document.createElement("div");
  this.player_list.push(new player("JACK", 0, that));
  this.player_list.push(new player("RYAN", 0, that));
  this.reset.addEventListener("click", function(){
    
    for(i=0; i<2; i++)
    {
      that.player_list[i].nbm = 0;
      that.nbm_element = that.nbm;
    }
      that.nbm_element = that.nbm;
      that.reset.innerHTML = "";
      that.message.innerHTML = "";
      that.inc_valid = true;
    }
  )
  
  this.game_element.appendChild(this.message);
  this.game_element.appendChild(this.reset);
  document.body.appendChild(this.game_element);
}

function player(ply, nbm, parent)
{
  let that = this;
  this.ply = ply;
  this.nbm = nbm;
  this.player_element = document.createElement("div");
  this.player_element.style.height = "70px";
  this.player_element.style.width = "200px";
  this.player_element.style.alignItems = "center";
  this.player_element.style.justifyContent = "center";
  this.player_element.style.textAlign = "center";
  this.player_element.style.fontSize = "18px";
  this.player_element.style.borderRadius = "10px";
  this.player_element.style.outlineColor = "#FF0000";
  this.ply_element = document.createElement("div");
  this.nbm_element = document.createElement("div");
  
  this.ply_element.innerHTML = "Player: " + this.ply;
  this.nbm_element.innerHTML = "CLICKS: " + this.nbm;
  
  parent.reset.addEventListener("click", function(){
    that.nbm = 0;
    that.nbm_element.innerHTML = "CLICKS: " + that.nbm;
  })
  
  this.player_element.addEventListener("click", function(){
    if(parent.inc_valid)
    {
      that.nbm++;
      that.nbm_element.innerHTML = "CLICKS: " + that.nbm;
      if(that.nbm>=5){
        parent.message.innerHTML = "WINNER IS : " + that.ply + "!";
        parent.reset.innerHTML = "<button>Reset</button>";
        parent.inc_valid = false;
      }
    } 
  })
  
  this.player_element.appendChild(this.ply_element);
  this.player_element.appendChild(this.nbm_element);
  document.body.appendChild(this.player_element);
}
var game = new game();
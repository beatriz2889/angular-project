import { Component, ViewChild, OnInit } from "@angular/core";
import { Player } from "./../../shared/player";
import { ApiService } from "./../../shared/api.service";
import { MatPaginator, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-player-rankings",
  templateUrl: "./player-rankings.component.html",
  styleUrls: ["./player-rankings.component.css"]
})
export class PlayerRankingsComponent implements OnInit {
  PlayerData: any = [];
  dataSource: MatTableDataSource<Player>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = [
    "player_name",
    "player_rank",
    "score",
    "time",
    "favorite_game",
    "status",
    "action"
  ];

  constructor(private playerApi: ApiService) {
    this.playerApi.GetPlayers().subscribe(data => {
      this.PlayerData = data;
      console.log(data);
      this.dataSource = new MatTableDataSource<Player>(this.PlayerData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  ngOnInit() {}
}

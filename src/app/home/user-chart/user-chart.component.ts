import { Component, OnInit } from "@angular/core";
import { User } from "../../model/user";
import { trigger } from "@angular/animations";
import { UserService } from "../../services/user.service";

@Component({
    selector: 'app-user-chart',
    templateUrl: './user-chart.component.html',
    styleUrls: ['./user-chart.component.scss']
})
export class UserChartComponent implements OnInit {

    chartOption: any;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.users$.subscribe({
            next: (users) => {
                this.gerarDados(users);
            }
        });
    }

    gerarDados(users: User[]): void {
        const categories = ['1-10', '11-20', '21-30', '31-40', '40+' ];
        const men = [0, 0, 0, 0, 0];
        const women = [0, 0, 0, 0, 0];

        for (const user of users) {
            let i = 4; // 40+
            if (user.age <= 10) {
                i = 0;
            } else if (user.age <= 20) {
                i = 1;
            } else if (user.age <= 30) {
                i = 2;
            } else if (user.age <= 40) {
                i = 3;
            }

            if (user.gender.toLowerCase() === 'male') {
                men[i]++;
            } else {
                women[i]++;
            }
        }

        this.chartOption = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Homens', 'Mulheres'],
                top: 'bottom'
            },
            xAxis: {
                type: 'category',
                data: categories
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                name: 'Homens',
                type: 'bar',
                data: men,
                itemStyle: { color: '#3b82f6' }
            },
            {
                name: 'Mulheres',
                type: 'bar',
                data: women,
                itemStyle: { color: '#ec4899' }
            }
            ]
        };
    }

}
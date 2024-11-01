import { Console } from '@woowacourse/mission-utils';

export default class StatisticsService {
  constructor(rankCounts, paidAmount) {
    this.rankCounts = rankCounts;
    this.paidAmount = paidAmount;
  }

  printStatistics() {
    Console.print('당첨 통계\n---');
    Console.print(
      `3개 일치 (5,000원) - ${this.rankCounts.threeMatch.ticket}개`,
    );
    Console.print(
      `4개 일치 (50,000원) - ${this.rankCounts.fourMatch.ticket}개`,
    );
    Console.print(
      `5개 일치 (1,500,000원) - ${this.rankCounts.fiveMatch.ticket}개`,
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.rankCounts.fiveMatchWithBonus.ticket}개`,
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${this.rankCounts.sixMatch.ticket}개`,
    );
  }

  calculateTotalRevenue() {
    return Object.values(this.rankCounts).reduce(
      (total, { ticket, prize }) => total + ticket * prize,
      0,
    );
  }

  printRevenueRate() {
    const totalRevenue = this.calculateTotalRevenue();
    const revenueRate = (totalRevenue / this.paidAmount) * 100;
    Console.print(`총 수익률은 ${revenueRate}%입니다.`);
  }
}
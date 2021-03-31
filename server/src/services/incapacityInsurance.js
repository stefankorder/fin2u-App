export default function incapacityInsurance(user, insurances) {
  const incapacityInsurance = insurances.find(
    (insurance) => insurance.value === "incapacity"
  );
  if (!user.insurancesAlreadyHave.includes("incapacity")) {
    if (user.age > 59) {
      incapacityInsurance.status = 1;
      incapacityInsurance.text = `
          Du hast angegeben, dass du keine {insuranceToDetail.name} hast. Du
          hast mit ${user.age} bereits das 60 Lebenjahr erreicht.
          Glückwunsch hierzu! Du beschreitest gerade die letzten
          ${65 - user.age} Jahre bis zu deiner Rente. Sofern du Gesund
          genug bist, könntest du über eine Absicherung deiner Arbeitskraft
          nachdenken, hierzu stehen dir außer der
          ${incapacityInsurance.name}, auch weitere günstige Alternativen zur
          Verfügung. Bedenke, dass ohne Absicherung vor allem die letzten Jahre
          bis zum Renteneintritt schwierig werden können. Ziehe diese
          Versicherung also in Betracht, wenn du Gesund bist.
      `;
    } else if (user.age < 60 && user.age > 49) {
      incapacityInsurance.status = 2;
      incapacityInsurance.text = `
          Du hast angegeben, dass du noch keine ${
            incapacityInsurance.name
          } hast.
          Da du mit ${user.age} zwar bereits das 50, jedoch noch nicht
          das 60 Lebensjahr erreicht hast und voraussichtlich noch
          ${67 - user.age} Jahre bis zum Renteneintritt arbeiten
          musst, solltest du, sofern du Gesund genug bist, über eine Absicherung
          deiner Arbeitskraft intensiv nachdenken. Bedenke, dass ohne
          Absicherung vor allem die letzten Jahre bis zum Renteneintritt
          schwierig werden können. Schließe diese Versicherung also ab, solange
          du noch gesund bist.
      `;
    } else {
      incapacityInsurance.status = 3;
      incapacityInsurance.text = `
          Du hast angegeben, dass du noch keine ${
            incapacityInsurance.name
          } hast.
          Da du mit ${user.age} noch unter 50 Jahre alt bist und
          voraussichtlich noch ${67 - user.age} Jahre bis zum
          Renteneintritt arbeiten musst, sollte dir die Absicherung deiner
          Arbeitskraft besonders wichtig sein. Bedenke vor allem, dass mit
          steigendem Alter der Abschluss einer Berufsunfähigkeitsversicherung
          aufgrund steigender Beiträge und zunehmender Vorerkrankungen immer
          schwieriger wird. Schließe diese Versicherung ab, solange du noch jung
          und gesund bist.
      `;
    }
  } else {
    incapacityInsurance.status = 0;
    incapacityInsurance.text = `
    Glückwunsch, du hast angegeben, dass du bereits eine
    ${incapacityInsurance.name} abgeschlossen hast. Deine Arbeitskraft hast
    du somit abgesichert und kannst den nächsten
    ${user.age > 59 ? 65 - user.age : 67 - user.age}
    Jahren bis zu deiner Rente entspannt entgegen sehen. Beachte jedoch
    mindestens einmal jährlich deinen Versicherungsschutz zu prüfen, in
    den meisten Tarifen sind Erhöhungsoptionen eingebaut, die es dir
    Erlauben deine vereinbarte Berufsunfähigkeitsrente an deine
    Lebenssituation anzupassen. Ein Anlass kann zum Beispiel die Heirat
    oder die Geburt eines Kindes darstellen.
    `;
  }
  return incapacityInsurance;
}

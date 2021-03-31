export default function incapacityInsurance(user, insurances) {
  const incapacityInsurance = insurances.find(
    (insurance) => insurance.value === "incapacity"
  );
  if (!user.insurancesAlreadyHave.includes("incapacity")) {
    if (user.age > 59) {
      incapacityInsurance.status = 1;
      incapacityInsurance.text = `
          Du hast angegeben, dass du keine ${
            insuranceToDetail.name
          } hast.<br> Du
          hast mit ${user.age} bereits das 60 Lebenjahr erreicht.<br>
          Glückwunsch hierzu! Du beschreitest gerade die letzten
          ${65 - user.age} Jahre bis zu deiner Rente.<br> Sofern du Gesund
          genug bist, könntest du über eine Absicherung deiner Arbeitskraft
          nachdenken, hierzu stehen dir außer der
          ${incapacityInsurance.name}, auch weitere günstige Alternativen zur
          Verfügung.<br> Bedenke, dass ohne Absicherung vor allem die letzten Jahre
          bis zum Renteneintritt schwierig werden können. Ziehe diese
          Versicherung also in Betracht, wenn du Gesund bist!<br>
      `;
    } else if (user.age < 60 && user.age > 49) {
      incapacityInsurance.status = 2;
      incapacityInsurance.text = `
          Du hast angegeben, dass du noch keine ${
            incapacityInsurance.name
          } hast.<br>
          Da du mit ${user.age} zwar bereits das 50, jedoch noch nicht
          das 60 Lebensjahr erreicht hast und voraussichtlich noch
          ${67 - user.age} Jahre bis zum Renteneintritt arbeiten
          musst, solltest du, sofern du Gesund genug bist, über eine Absicherung
          deiner Arbeitskraft intensiv nachdenken.<br> Bedenke, dass ohne
          Absicherung vor allem die letzten Jahre bis zum Renteneintritt
          schwierig werden können. Schließe diese Versicherung also ab, solange
          du noch gesund bist!.<br>
      `;
    } else {
      incapacityInsurance.status = 3;
      incapacityInsurance.text = `
          Du hast angegeben, dass du noch keine ${
            incapacityInsurance.name
          } abgeschlossen hast.<br>
          Mit ${user.age} Jahren hast du voraussichtlich noch ${
        67 - user.age
      } Jahre bis zum
          Renteneintritt zu arbeiten.<br> Auf dem Weg dorthin werden dir etliche Stolpersteine begenen.<br> Hierunter können auch schwerwiegende Unfälle oder Krankheiten fallen, die es dir unmöglich machen in deinem Beruf weiterzuarbeiten.<br> Als wenn diese schwerwiegenden Ereignisse nicht schon genug wären, entsteht zusätzlich noch ein erheblicher finazieller Schaden, welcher bis zur Rente gerechnet ein Millionbetrag ausmachen kann.<br> Die Absicherung deiner Arbeitskraft sollte dir daher besonders wichtig sein!<br> Zumindest ein erheblicher finanzieller Schaden lässt sich somit abwenden und du kannst dich voll auf deine Genesung konzentrieren.<br> Bedenke vor allem, dass mit steigendem Alter der Abschluss einer Berufsunfähigkeitsversicherung
          aufgrund zunehmender Beiträge und Vorerkrankungen immer
          schwieriger wird.<br> Schließe diese Versicherung daher ab, solange du noch jung
          und gesund bist!<br>
      `;
    }
  } else {
    incapacityInsurance.status = 0;
    incapacityInsurance.text = `
    Glückwunsch, du hast angegeben, dass du bereits eine
    ${incapacityInsurance.name} abgeschlossen hast.<br> Deine Arbeitskraft hast
    du somit abgesichert und kannst den nächsten
    ${user.age > 59 ? 65 - user.age : 67 - user.age}
    Jahren bis zu deiner Rente entspannt entgegen sehen!<br> Beachte jedoch
    mindestens einmal jährlich deinen Versicherungsschutz zu prüfen, in
    den meisten Tarifen sind Erhöhungsoptionen eingebaut, die es dir
    Erlauben deine vereinbarte Berufsunfähigkeitsrente an deine
    Lebenssituation anzupassen.<br> Ein Anlass kann zum Beispiel die Heirat
    oder die Geburt eines Kindes darstellen.<br>
    `;
  }
  return incapacityInsurance;
}

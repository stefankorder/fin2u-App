export default function incapacityInsurance(user, insurances) {
  const incapacityInsurance = insurances.find(
    (insurance) => insurance.value === "incapacity"
  );
  if (!user.insurancesAlreadyHave.includes("incapacity")) {
    if (user.age > 59) {
      incapacityInsurance.status = 1;
      incapacityInsurance.text = `
      <p>Du hast angegeben, dass du keine ${
        insuranceToDetail.name
      } hast.</p> <p>Du
          hast mit ${user.age} bereits das 60 Lebenjahr erreicht.</p>
          <p>Glückwunsch hierzu! Du beschreitest gerade die letzten
          ${65 - user.age} Jahre bis zu deiner Rente.</p><p>Sofern du Gesund
          genug bist, könntest du über eine Absicherung deiner Arbeitskraft
          nachdenken, hierzu stehen dir außer der
          ${incapacityInsurance.name}, auch weitere günstige Alternativen zur
          Verfügung.</p><p> Bedenke, dass ohne Absicherung vor allem die letzten Jahre
          bis zum Renteneintritt schwierig werden können. Ziehe diese
          Versicherung also in Betracht, wenn du Gesund bist!</p>
      `;
    } else if (user.age < 60 && user.age > 49) {
      incapacityInsurance.status = 2;
      incapacityInsurance.text = `
      <p>Du hast angegeben, dass du noch keine ${
        incapacityInsurance.name
      } hast.</p>
          <p>Da du mit ${user.age} zwar bereits das 50, jedoch noch nicht
          das 60 Lebensjahr erreicht hast und voraussichtlich noch
          ${67 - user.age} Jahre bis zum Renteneintritt arbeiten
          musst, solltest du, sofern du Gesund genug bist, über eine Absicherung
          deiner Arbeitskraft intensiv nachdenken.</p> <p>Bedenke, dass ohne
          Absicherung vor allem die letzten Jahre bis zum Renteneintritt
          schwierig werden können. Schließe diese Versicherung also ab, solange
          du noch gesund bist!.</p>
      `;
    } else {
      incapacityInsurance.status = 3;
      incapacityInsurance.text = `
      <p>Du hast angegeben, dass du noch keine ${
        incapacityInsurance.name
      } abgeschlossen hast.</p>
          <p>Mit ${user.age} Jahren hast du voraussichtlich noch ${
        67 - user.age
      } Jahre bis zum
          Renteneintritt zu arbeiten.</p> <p>Auf dem Weg dorthin werden dir etliche Stolpersteine begenen.</p> <p>Hierunter können auch schwerwiegende Unfälle oder Krankheiten fallen, die es dir unmöglich machen in deinem Beruf weiterzuarbeiten.</p> <p>Als wenn diese schwerwiegenden Ereignisse nicht schon genug wären, entsteht zusätzlich noch ein <strong> erheblicher finazieller Schaden</strong>, welcher bis zur Rente gerechnet ein <strong>Millionbetrag</strong> ausmachen kann.</p> <p>Die Absicherung deiner Arbeitskraft sollte dir daher besonders wichtig sein!</p> <p>Zumindest ein erheblicher finanzieller Schaden lässt sich somit abwenden und du kannst dich voll auf deine Genesung konzentrieren.</p> <p>Bedenke vor allem, dass mit steigendem Alter der Abschluss einer Berufsunfähigkeitsversicherung
          aufgrund zunehmender Beiträge und Vorerkrankungen immer
          schwieriger wird.</p> <p>Schließe diese Versicherung daher ab, solange du noch jung
          und gesund bist!</p>
      `;
    }
  } else {
    incapacityInsurance.status = 0;
    incapacityInsurance.text = `
    <p>Glückwunsch, du hast angegeben, dass du bereits eine
    ${
      incapacityInsurance.name
    } abgeschlossen hast.</p> <p>Deine Arbeitskraft hast
    du somit abgesichert und kannst den nächsten
    ${user.age > 59 ? 65 - user.age : 67 - user.age}
    Jahren bis zu deiner Rente entspannt entgegen sehen!</p> <p>Beachte jedoch
    mindestens einmal jährlich deinen Versicherungsschutz zu prüfen, in
    den meisten Tarifen sind Erhöhungsoptionen eingebaut, die es dir
    Erlauben deine vereinbarte Berufsunfähigkeitsrente an deine
    Lebenssituation anzupassen.</p> <p>Ein Anlass kann zum Beispiel die Heirat
    oder die Geburt eines Kindes darstellen.</p>
    `;
  }
  return incapacityInsurance;
}

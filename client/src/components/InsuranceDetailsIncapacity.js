export default function InsuranceDetailsIncapacity({
  insuranceToDetail,
  userToCalculate,
}) {
  return (
    <>
      <h1>{insuranceToDetail.name}</h1>
      {insuranceToDetail.status === 3 && (
        <p>
          Du hast angegeben, dass du noch keine {insuranceToDetail.name} hast.
          Da du mit {userToCalculate.age} noch unter 50 Jahre alt bist und
          voraussichtlich noch {67 - userToCalculate.age} Jahre bis zum
          Renteneintritt arbeiten musst, sollte dir die Absicherung deiner
          Arbeitskraft besonders wichtig sein. Bedenke vor allem, dass mit
          steigendem Alter der Abschluss einer Berufsunfähigkeitsversicherung
          aufgrund steigender Beiträge und zunehmender Vorerkrankungen immer
          schwieriger wird. Schließe diese Versicherung ab, solange du noch jung
          und gesund bist.
        </p>
      )}
      {insuranceToDetail.status === 2 && (
        <p>
          Du hast angegeben, dass du noch keine {insuranceToDetail.name} hast.
          Da du mit {userToCalculate.age} zwar bereits das 50, jedoch noch nicht
          das 60 Lebensjahr erreicht hast und voraussichtlich noch
          {67 - userToCalculate.age} Jahre bis zum Renteneintritt arbeiten
          musst, solltest du, sofern du Gesund genug bist, über eine Absicherung
          deiner Arbeitskraft intensiv nachdenken. Bedenke, dass ohne
          Absicherung vor allem die letzten Jahre bis zum Renteneintritt
          schwierig werden können. Schließe diese Versicherung also ab, solange
          du noch gesund bist.
        </p>
      )}
      {insuranceToDetail.status === 1 && (
        <p>
          Du hast angegeben, dass du keine {insuranceToDetail.name} hast. Du
          hast mit {userToCalculate.age} bereits das 60 Lebenjahr erreicht.
          Glückwunsch hierzu! Du beschreitest gerade die letzten
          {65 - userToCalculate.age} Jahre bis zu deiner Rente. Sofern du Gesund
          genug bist, könntest du über eine Absicherung deiner Arbeitskraft
          nachdenken, hierzu stehen dir außer der
          {insuranceToDetail.name}, auch weitere günstige Alternativen zur
          Verfügung. Bedenke, dass ohne Absicherung vor allem die letzten Jahre
          bis zum Renteneintritt schwierig werden können. Ziehe diese
          Versicherung also in Betracht, wenn du Gesund bist.
        </p>
      )}
      {insuranceToDetail.status === 0 && (
        <p>
          Glückwunsch, du hast angegeben, dass du bereits eine
          {insuranceToDetail.name} abgeschlossen hast. Deine Arbeitskraft hast
          du somit abgesichert und kannst den nächsten
          {userToCalculate.age > 59
            ? 65 - userToCalculate.age
            : 67 - userToCalculate.age}
          Jahren bis zu deiner Rente entspannt entgegen sehen. Beachte jedoch
          mindestens einmal jährlich deinen Versicherungsschutz zu prüfen, in
          den meisten Tarifen sind Erhöhungsoptionen eingebaut, die es dir
          Erlauben deine vereinbarte Berufsunfähigkeitsrente an deine
          Lebenssituation anzupassen. Ein Anlass kann zum Beispiel die Heirat
          oder die Geburt eines Kindes darstellen.
        </p>
      )}
    </>
  );
}

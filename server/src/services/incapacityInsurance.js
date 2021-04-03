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
      } hast. Du hast mit ${
        user.age
      } bereits das 60 Lebenjahr erreicht. Glückwunsch hierzu! Du beschreitest gerade die letzten ${
        65 - user.age
      } Jahre bis zu deiner Rente. Sofern du Gesund genug bist, könntest du über eine Absicherung deiner Arbeitskraft nachdenken, hierzu stehen dir außer der ${
        incapacityInsurance.name
      }, auch weitere günstige Alternativen zur Verfügung.</p> <p><strong>Bedenke, dass ohne Absicherung vor allem die letzten Jahre bis zum Renteneintritt schwierig werden können. Ziehe diese Versicherung also in Betracht, wenn du Gesund bist!</p></strong> <p>Weitere Informationen über die Berufsunfähigkeitsversicherung erfährst du in den nachfolgenden Zeilen.</p>

      `;
    } else if (user.age < 60 && user.age > 49) {
      incapacityInsurance.status = 2;
      incapacityInsurance.text = `
      
<p>Du hast angegeben, dass du noch keine ${
        incapacityInsurance.name
      } hast. Da du mit ${
        user.age
      } zwar bereits das 50, jedoch noch nicht das 60 Lebensjahr erreicht hast und voraussichtlich noch ${
        67 - user.age
      } Jahre bis zum Renteneintritt arbeiten musst, solltest du, sofern du Gesund genug bist, über eine Absicherung deiner Arbeitskraft intensiv nachdenken.</p> <p><strong> Bedenke, dass ohne Absicherung vor allem die letzten Jahre bis zum Renteneintritt schwierig werden können. Schließe diese Versicherung also ab, solange du noch gesund bist!.</strong></p> <p> Weitere Informationen über die Berufsunfähigkeitsversicherung erfährst du in den nachfolgenden Zeilen.</p>
      `;
    } else {
      incapacityInsurance.status = 3;
      incapacityInsurance.text = `

<p>Du hast angegeben, dass du noch keine ${
        incapacityInsurance.name
      } abgeschlossen hast. Mit ${
        user.age
      } Jahren hast du voraussichtlich noch ${67 - user.age} Jahre bis zum
Renteneintritt zu arbeiten. Auf dem Weg dorthin werden dir etliche Stolpersteine begenen. Hierunter können auch schwerwiegende Unfälle oder Krankheiten fallen, die es dir unmöglich machen in deinem Beruf weiterzuarbeiten. Als wenn diese schwerwiegenden Ereignisse nicht schon genug wären, entsteht zusätzlich noch ein <strong> erheblicher finazieller Schaden</strong>, welcher bis zur Rente gerechnet ein <strong>Millionbetrag</strong> ausmachen kann. Die Absicherung deiner Arbeitskraft sollte dir daher besonders wichtig sein! Zumindest ein erheblicher finanzieller Schaden lässt sich somit abwenden und du kannst dich voll auf deine Genesung konzentrieren.</p> <p><strong> Bedenke vor allem, dass mit steigendem Alter der Abschluss einer Berufsunfähigkeitsversicherung aufgrund zunehmender Beiträge und Vorerkrankungen immer schwieriger wird. Schließe diese Versicherung daher ab, solange du noch jung und gesund bist!</strong></p> <p> Weitere Informationen über die Berufsunfähigkeitsversicherung erfährst du in den nachfolgenden Zeilen.</p>

      `;
    }
  } else {
    incapacityInsurance.status = 0;
    incapacityInsurance.text = `

<p>Glückwunsch, du hast angegeben, dass du bereits eine ${
      incapacityInsurance.name
    } abgeschlossen hast. Deine Arbeitskraft hast du somit abgesichert und kannst den nächsten ${
      user.age > 59 ? 65 - user.age : 67 - user.age
    } Jahren bis zu deiner Rente entspannt entgegen sehen! </p> <p><strong> Beachte jedoch mindestens einmal jährlich deinen Versicherungsschutz zu prüfen, in den meisten Tarifen sind Erhöhungsoptionen eingebaut, die es dir Erlauben deine vereinbarte Berufsunfähigkeitsrente an deine Lebenssituation anzupassen. Ein Anlass kann zum Beispiel die Heirat oder die Geburt eines Kindes darstellen.</strong> </p> <p> Weitere Informationen über die Berufsunfähigkeitsversicherung erfährst du in den nachfolgenden Zeilen.</p>
    `;
  }
  incapacityInsurance.text += `
   
<h2>Was ist die Berufsunfähigkeitsversicherung?</h2>

<p>Wird man berufsunfähig, fallen in der Regel Einnahmen aus Lohn und Gehalt weg. Meist kommen weitere finanzielle Belastungen hinzu, beispielsweise für medizinische Versorgung oder Betreuung. Besonders schwerwiegend ist das für junge Leute mit nur geringem Finanzpolster, für Familien mit Alleinverdiener oder für Singles.</p>

<p>Bei vielen handwerklichen Berufen ist das Risiko, berufsunfähig zu werden, besonders hoch. Aber auch Menschen, die nicht körperlich arbeiten, laufen Gefahr, berufsunfähig zu werden, zum Beispiel durch psychische Erkrankungen - mittlerweile die häufigste Ursache von Berufsunfähigkeit.</p>

<p>Eine Berufsunfähigkeitsversicherung (Kurzform: BU-Versicherung) kann die finanzielle Lücke schließen. Das ist umso wichtiger, da die Leistungen aus der gesetzlichen Rentenversicherung in der Vergangenheit deutlich reduziert wurden (wie etwa bei der Erwerbsminderungsrente).</p>

<p>Das bedeutet: Praktisch jeder, der von seinem Einkommen abhängig ist, kommt um eine zusätzliche Absicherung nicht herum, um im Fall einer Berufsunfähigkeit seinen gewohnten Lebensstandard halten zu können.</p>

<h2>Was leistet die Berufsunfähigkeitsversicherung?</h2>

<p>Die private Berufsunfähigkeitsversicherung zahlt einem berufstätigen Versicherten in der Regel eine BU-Rente, wenn er wegen einer Krankheit oder eines Unfalls zu mindestens 50 Prozent berufsunfähig ist. Auch wer pflegebedürftig ist, kann als berufsunfähig gelten. Wann dies genau der Fall ist, hängt von der vertraglichen Vereinbarung ab.</p>

<p><strong>Achtung: Die Versicherer möchten ihren Kunden sowohl eine preiswerte Basisabsicherung als auch einen umfassenden Versicherungsschutz anbieten. Deshalb verwenden sie in ihren Verträgen oft unterschiedliche Definitionen dafür, was eine Berufsunfähigkeit ausmacht.</strong></p>

<p>Zwei Möglichkeiten für den Berufsunfähigkeitsschutz:</p>

<p>Man hat zwei Möglichkeiten, um sich gegen das finanzielle Risiko im Fall einer Berufsunfähigkeit privat abzusichern. Welche Form am besten geeignet ist, hängt von den individuellen Lebensumständen und Vorstellungen ab.</p>

<h2>1. Selbstständige Berufsunfähigkeitsversicherung</h2>

<p>Bei dieser Vertragsform handelt es sich um einen eigenständigen Risikovertrag. Ähnlich wie bei einer Risikolebensversicherung kalkuliert hier der Versicherer aufgrund der biometrischen Daten das individuelle Berufsunfähigkeitsrisiko. Daraus errechnen sich der erforderliche Beitrag für die gewünschte Laufzeit (zum Beispiel bis zum 65. Lebensjahr) und die versicherte monatliche Berufsunfähigkeitsrente.</p>

<p>Eintritt der Berufsunfähigkeit während der Laufzeit: Die Versicherung zahlt die vereinbarte monatliche Berufsunfähigkeitsrente, solange die Berufsunfähigkeit andauert; längstens jedoch bis zum Ende der vereinbarten Vertragslaufzeit der BU-Versicherung.</p>

<p>Kein Eintritt der Berufsunfähigkeit während der Laufzeit: Eine Schlusszahlung (wie zum Beispiel bei einer kapitalbildenden Lebensversicherung) wird vom Versicherer nur im Ausnahmefall und gegebenenfalls in relativ geringem Umfang erbracht, da der Versicherte während der Vertragslaufzeit nur einen reinen Risikobeitrag ohne Sparanteil bezahlt.</p>

<h2>2. Berufsunfähigkeits­-Zusatzversicherung</h2>

<p>Diese Zusatzversicherung kann nur in Kombination mit einer Lebens- oder Rentenversicherung abgeschlossen werden. Die Berufsunfähigkeitsrente dient in diesem Fall vor allem dazu, dass der Versicherte, sollte er berufsunfähig werden, die Beiträge zu seiner Altersvorsorge etwa in Form von Lebens- und/oder Rentenversicherungen weiterhin bezahlen kann. So bleibt zumindest die private Altersvorsorge bestehen und kann bis zur Rente fortgeführt werden. Darüber hinaus kann der Kunde noch eine Berufsunfähigkeitsrente vereinbaren.</p>

<h2>Die Risikoprüfung</h2>

<p>Ein entscheidender Punkt bei der Gestaltung der Berufsunfähigkeitsversicherung ist die Frage: Wie groß ist das Risiko des Antragstellers, berufsunfähig zu werden? Ob und zu welchen Bedingungen man Versicherungsschutz erhält, ist deshalb abhängig von:</p>

<ul>
  <li>Gesundheitszustand, aktuellen Krankheiten bzw. Vorerkrankungen</li>
  <li>Alter</li>
  <li>ausgeübtem Beruf (häufig haben die Versicherungsunternehmen „Berufskataloge“, die das Risiko der Tätigkeiten berücksichtigen.)</li>
  <li>risikoreichen Hobbys</li>
</ul>

<p>Um diese individuellen Lebensumstände richtig zu bewerten, erfolgt vor dem Abschluss einer BU-Versicherung einmalig die sogenannte Risikoprüfung. Dabei wird man vom Versicherer aufgefordert, schriftlich verschiedene Fragen zum Gesundheitszustand und zur Krankheitsvorgeschichte zu beantworten. Diese Fragen beziehen sich in der Regel auf fünf bis zehn Jahre vor Antragstellung. Liegen risikorelevante Einschränkungen vor, zum Beispiel Allergien, müssen darüber auf einem zusätzlichen Fragebogen weitere Angaben gemacht werden.</p>

<p>Anhand dieser Angaben wird das Risikoprofil des Kunden ermittelt. Basierend darauf legt der Versicherer einen Beitrag für die Berufsunfähigkeitsversicherung fest, der dann für die gesamte Vertragslaufzeit garantiert ist.</p>

<h2>Wie wird die Berufsunfähigkeit festgestellt?</h2>

<p>Wer aufgrund eines Unfalls oder einer Krankheit nicht mehr arbeiten kann und ohne Einkommen dasteht, hat mit einer Berufsunfähigkeitsversicherung gut vorgesorgt. Doch die Versicherung zahlt nicht automatisch: Zunächst muss ein Arzt feststellen, dass beim Versicherten eine Erkrankung vorliegt. Die Diagnose wird durch Melde- oder Fragebögen des Versicherers überprüft. Gegebenenfalls kann der Versicherer auch einen anderen Arzt zur weiteren Prüfung beauftragen.</p>

<p>Kommt dieser zu dem Ergebnis, dass keine Berufsunfähigkeit vorliegt, kann der Versicherte einen Gutachter einschalten: Das Versicherungsunternehmen schlägt zum Beispiel drei Ärzte vor, die in der Nähe des Betroffenen praktizieren. Der Versicherte wählt einen aus und der erstellt dann ein Gutachten.</p>

<h2>Welche weiteren Möglichkeiten gibt es?</h2>

<p>Die gesetzliche Erwerbsminderungsrente reicht nicht aus und die Berufsunfähigkeitsversicherung als Absicherung ist nicht die ideale Option: Für diesen Fall gibt es Alternativen. Je nach Beruf und individuellem Bedürfnis kommen auch andere private Versicherungen in Frage, wie Arbeitnehmer das Risiko des Einkommensverlustes abdecken können. Dazu zählen unter anderem folgende Versicherungen:</p>

<ul>
  <li>Die Grundfähigkeitsversicherung: Bei der Grundfähigkeitsversicherung werden bestimmte grundlegende Fähigkeiten versichert. Dazu zählen zum Beispiel das Sehen, Sprechen, Gehen, Autofahren oder Treppensteigen. Wer Fähigkeiten verliert, die im Vertrag bestimmt wurden, bekommt von der Versicherung eine vertraglich vereinbarte monatliche Rente ausgezahlt.</li>
  <li>Die Erwerbsunfähigkeitsversicherung kann etwa für Personen in körperlich anstrengenden Berufen sinnvoll sein.</li>
  <li>Auch die Leistungen einer privaten Unfallversicherung helfen Arbeitnehmern weiter, sollten sie aufgrund eines Unfalls nicht mehr arbeiten können (u.a. auch mit monatlichen Renten).</li>
  <li>Die Anbieter von Dread-Disease-Versicherungen leisten, wenn eine schwere Krankheit wie etwa Krebs oder Multiple Sklerose die Ursache einer Berufsunfähigkeit ist.</li>
  <li>Multi-Risk-Versicherungen sorgen für einen Rundumschutz gegen Erkrankungen und Unfälle, indem sie verschiedene Bausteine aus den anderen Versicherungen kombinieren.</li>
</ul>

  `;
  return incapacityInsurance;
}

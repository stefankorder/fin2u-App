export default function accidentInsurance(user, insurances) {
  const accidentInsurance = insurances.find(
    (insurance) => insurance.value === "accident"
  );
  if (!user.insurancesAlreadyHave.includes("accident")) {
    if (user.dangerousHobby) {
      accidentInsurance.status = 3;
      accidentInsurance.text = `
    
<p>${user.name}, du hast angegeben, dass du bisher keine Unfallversicherung abgeschlossen hast und ein gefährliches Hobby ausübst. Damit bist du besonders unfallgefährdet und solltest dringend über den Abschluss einer privaten Unfallversicherung nachdenken. Beachte hierbei vor allem, dass dein Hobby bei dem Anbieter nicht ausgeschlossen ist. Oft sind zum Beispiel Sportarten, wie z. B. Tauchen vom Versicherungsumfang ausgeschlossen!</p> <p><strong>Vor allem wenn keine anderen arbeitskraftabsichernden Versicherungen (z. B. Berufsunfähigkeitsversicherung) vorhanden und möglich sind, solltest du eine private Unfallversicherung abschließen!</strong></p> <p>Was eine Unfallversicherung leistet und wieso sie wichtig sein kann, erfährst du in den nachfolgenden Zeilen.</p>
    
    `;
    } else {
      accidentInsurance.status = 1;
      accidentInsurance.text = `
    
<p>${user.name}, du hast angegeben, dass du bisher keine Unfallversicherung abgeschlossen hast. Vielleicht denkst du, dass die gesetzliche Unfallversicherung ausreicht, oder hast dich einfach noch nicht mit der Thematik beschäftigt. Fakt ist jedoch, dass sich der überwiegende Teil aller Unfälle im privaten Bereich ereignet und hier leistet die gesetzliche Unfallversicherung nicht.</p> <p><strong>Vor allem wenn keine anderen arbeitskraftabsichernden Versicherungen (z. B. Berufsunfähigkeitsversicherung) vorhanden und möglich sind, kann eine private Unfallversicherung Sinn machen!</strong></p> <p>Was eine Unfallversicherung leistet und wieso sie wichtig sein kann, erfährst du in den nachfolgenden Zeilen.</p>
    
    `;
    }
  } else {
    accidentInsurance.status = 0;
    accidentInsurance.text = `
    
<p>${user.name}, du hast angegeben, dass du bereits eine Unfallversicherung abgeschlossen hast. Was eine Unfallversicherung leistet und wieso sie wichtig sein kann, erfährst du in den nachfolgenden Zeilen. </p> <p><strong> Vergiss nicht deinen Versicherungsschutz regelmäßig überprüfen zu lassen! </strong></p>
    
    `;
  }
  accidentInsurance.text += `
  
<h2>Was ist die private Unfallversicherung?</h2>

<p>In Deutschland erleiden jährlich rund acht Millionen Menschen einen Unfall. Die meisten Unfälle geschehen in der Freizeit, entweder zu Hause oder beim Sport. Ein schwerer Unfall zieht oftmals anhaltende gesundheitliche oder finanzielle Folgen nach sich: Es können einmalige oder dauerhafte finanzielle Belastungen entstehen. Hier greift die private Unfallversicherung.</p>


<p>Die private Unfallversicherung springt ein, wenn ein Unfall dauerhafte körperliche oder geistige Beeinträchtigungen nach sich zieht oder sogar zum Tod führt. Aber auch bei Unfallfolgen, die nicht von Dauer sind, leistet die Unfallversicherung. Der Versicherungsschutz gilt in der Regel rund um die Uhr und weltweit.</p>


<h2>Was leistet die private Unfallversicherung?</h2>

<p>Ein Unfall kann schnell passieren. Zum Glück kommen die meisten Menschen mit dem Schrecken und kleinen Blessuren davon. Aber leider nicht immer. Deshalb ist die private Unfallversicherung für jeden Menschen wichtig. Die Unterstützung, die die private Unfallversicherung ermöglicht, ist vielfältig.</p>


<p>Invaliditätsleistung</p>

<p>Die Invaliditätsleistung ist eine Einmalleistung in Form einer Kapitalsumme. Sie berechnet sich zum einen nach dem Grad der Invalidität, die anhand der Gliedertaxe ermittelt wird. Zum anderen nach der Höhe der vereinbarten Versicherungssumme. Die Leistung ist an keinen Verwendungszweck gebunden.</p>


<p>Unfallrente</p>

<p>Bei besonders schweren dauerhaften Beeinträchtigungen bezahlt die Unfallversicherung eine lebenslange Rente. Die Rentenhöhe wird individuell vereinbart. Maßgabe ist dabei der Grad der Beeinträchtigung. Die Rentenzahlung ist an keinen Verwendungszweck gebunden.</p>


<p>Todesfallleistung</p>

<p>Führt der Unfall innerhalb eines Jahres zum Tode, haben die Hinterbliebenen Anspruch auf die versicherte Todesfallsumme. Sie ist meist niedriger als die vereinbarte Invaliditätssumme.</p>


<p>Tagegeld, Krankenhaustagegeld</p>

<p>Vor allem für Selbstständige ist ein Unfall meist mit Verdienstausfall verbunden. Deshalb vereinbaren sie in aller Regel ein Tagegeld. Es wird bis zu einem Jahr nach dem Unfalltag gezahlt. Bei einem Krankenhausaufenthalt kann das Krankenhaustagegeld helfen, das meist bis zu zwei Jahre nach dem Unfall gezahlt wird. Der Versicherer zahlt das Krankenhaustagegeld meist auch dann, wenn der Versicherte wegen einer ambulanten Operation arbeitsunfähig ist.</p>


<p>Übergangsleistung</p>

<p>Der Prozess der Genesung verläuft nicht bei jedem Verletzten gleich. Deshalb kann der Arzt den für die Höhe der Leistung entscheidenden Invaliditätsgrad oft erst nach der Heilung feststellen. Diese Zeitspanne kann eine Übergangsleistung überbrücken. Sie wird gezahlt, wenn die körperliche oder geistige Leistungsfähigkeit des Verletzten für mehr als sechs Monate seit dem Unfall zu mindestens 50% in seiner beruflichen Tätigkeit bzw. Arbeitsfähigkeit eingeschränkt ist – auch wenn die Verletzungen später vollständig ausheilen. So kann etwa die Rehabilitation finanziell gesichert werden. Einige Unfallversicherungen zahlen einen Teil der Übergangsleistung auch schon früher aus.</p>


<p>Bergungskosten</p>

<p>Unfälle können auch weit weg von zu Hause, zum Beispiel im Urlaub, geschehen. Die Unfallversicherung übernimmt dann die Kosten für erforderliche Such-, Rettungs- und Bergungsleistungen und den Transport nach Hause oder in ein nahegelegenes Krankenhaus. Je nach Vertrag kümmert er sich ebenso um die Unterbringung von Angehörigen oder steht beratend zur Seite.</p>


<p>Kosmetische Operationen</p>

<p>Unfälle können das äußere Erscheinungsbild erheblich beeinträchtigen. Die Unfallversicherung trägt dann unter bestimmten Voraussetzungen die Kosten für kosmetische Operationen.</p>

  `;
  return accidentInsurance;
}

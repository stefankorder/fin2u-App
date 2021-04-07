export default function legalProtectionInsurance(user, insurances) {
  const legalProtectionInsurance = insurances.find(
    (insurance) => insurance.value === "legalProtection"
  );
  if (!user.insurancesAlreadyHave.includes("legalProtection")) {
    if (user.jobStatus === "employed" || user.houseOwner) {
      legalProtectionInsurance.status = 3;
      legalProtectionInsurance.text = `
      
<p>${
        user.name
      }, du hast angegeben, dass bisher keine Rechtsschutzversicherung abgeschlossen hast und ${
        user.houseOwner
          ? "Eigentümer einer Immobilie bist"
          : "dein Berufsstatus angestellt ist"
      }. Die häufigsten Rechtsschutzfälle entstehen u. a. bei Streitigkeiten zwischen Mietern und Vermietern sowie zwischen Arbeitnehmern und Arbeitgebern. Um dich vor den finanziellen folgen eines Rechtsstreites zu schützen, solltest du den Abschluss einer Rechtsschutzversicherung auf jeden Fall in Betracht ziehen.</p> <p><strong>Bitte beachte in dem Zusammenhang, dass die Rechtsschutzversicherung nur für die Teile aufkommt, die du auch abgeschlossen hast. Eine Verkehrsrechtsschutz schützt dich z. B. nicht bei Fällen im privaten Bereich!</strong></p> <p> Was eine Rechtsschutzversicherung ist und was sie alles leistet erfährst du in den nachfolgenden Zeilen.</p>
      
      `;
    } else {
      legalProtectionInsurance.status = 2;
      legalProtectionInsurance.text = `
      
<p>${user.name}, du hast angegeben, dass bisher keine Rechtsschutzversicherung abgeschlossen hast. Um dich vor den finanziellen folgen eines Rechtsstreites zu schützen, solltest du darüber nachdenken, eine Rechtsschutzversicherung abzuschließen.</p> <p><strong>Bitte beachte in dem Zusammenhang, dass die Rechtsschutzversicherung nur für die Teile aufkommt, die du auch abgeschlossen hast. Eine Verkehrsrechtsschutz schützt dich z. B. nicht bei Fällen im privaten Bereich!</strong></p> <p> Was eine Rechtsschutzversicherung ist und was sie alles leistet erfährst du in den nachfolgenden Zeilen.</p>
      
      `;
    }
  } else {
    legalProtectionInsurance.status = 0;
    legalProtectionInsurance.text = `
    
<p>${user.name}, du hast angegeben, dass bereits eine Rechtsschutzversicherung abgeschlossen hast. Glückwunsch, somit bist du vor den finaziellen Folgen, die ein Rechtsstreit nach sich ziehen kann bestens geschützt.</p> <p><strong>Bitte beachte in dem Zusammenhang, dass die Rechtsschutzversicherung nur für die Teile aufkommt, die du auch abgeschlossen hast. Eine Verkehrsrechtsschutz schützt dich z. B. nicht bei Fällen im privaten Bereich. Bitte denke daher daran deinen Versicherungsschutz regelmäßig zu überprüfen und zu aktualisieren!</strong></p> <p> Was eine Rechtsschutzversicherung ist und was sie alles leistet erfährst du in den nachfolgenden Zeilen.</p>
    
    `;
  }
  legalProtectionInsurance.text += `

<h2>Auf einen Blick</h2>

<img src="/images/rechtschutz-infografik-produktseite-data.jpg">
  
<h2>Was ist die Rechtsschutzversicherung?</h2>

<p>Streit und Missverständnisse gibt es in allen Lebenslagen. In vielen Situationen muss man sogar zum Anwalt oder vor Gericht gehen, wenn man zu seinem guten Recht kommen möchte - trägt dafür auch das volle finanzielle Risiko. Mit der richtigen Versicherung kann man diesen Situationen gelassener entgegensehen, da sie eine finanzielle Unterstützung gewährleistet.</p>

<p>Eine Rechtsschutzversicherung hilft beispielsweise bei:</p>

<ul>
  <li>Nachbarschaftsstreitigkeiten</li>
  <li>Mietrechtsstreit</li>
  <li>Durchsetzung von Schadenersatzforderungen</li>
  <li>Steuerrechtlichen Angelegenheiten vor Gericht</li>
  <li>Streitigkeiten im Arbeitsrecht</li>
  <li>Verkehrsunfällen</li>
</ul>

<p>Die Rechtsschutzversicherung kann mit verschiedenen Leistungsbausteinen individuell gestaltet werden, die der persönlichen Lebenssituation entsprechen (siehe weiter unten). Interessierte sollten sich an einen Rechtsschutzversicherer oder einen Berater wenden, der für unterschiedliche Tarife einen Vergleich erstellen kann.</p>
  
<h2>Welche Leistungen übernimmt die Rechtsschutzversicherung?</h2>

<p>Die Rechtsschutzversicherung übernimmt in der Regel folgende Kosten bis zur Höhe der vereinbarten Versicherungssumme:</p>

<ul>
  <li>die gesetzlichen Anwaltsgebühren eines vom Versicherten gewählten Rechtsanwalts</li>
  <li>Gerichtskosten</li>
  <li>Zeugengelder und gerichtliche Sachverständigenhonorare</li>
  <li>Kosten des Gegners, soweit der Versicherte sie übernehmen muss</li>
  <li>Kosten für Mediationsverfahren </li>
</ul>

<h2>In welchen Fällen leistet die Rechtsschutzversicherung?</h2>

<ul>
  <li>Bei Teilerfolgen vor Gericht:
  Wenn die Kosten zwischen den Parteien durch den Richter aufgeteilt werden.</li>
  <li>Bei Zahlungsunfähigkeit des Gegners:
  Die eigenen Anwalts-/ Gerichtskosten, wenn man einen Prozess gewinnt – der Gegner aber zahlungsunfähig ist.</li>
  <li>Bei außergerichtlichen Streitigkeiten:
  Wenn der Gegner nicht verpflichtet ist, die fremden Anwaltskosten zu erstatten.</li>
</ul>

<p>Kosten, die ohne gesetzliche Verpflichtung übernommen worden sind, werden nicht erstattet. Dazu zählen zum Beispiel Anwaltshonorare, die über den gesetzlichen Gebührensätzen liegen oder Kosten des Gegners, die man freiwillig übernommen hat.</p>

<h2>Schnelle Orientierung im Streitfall</h2>

<p>Unverhofft kommt oft: Nach einem Verkehrsunfall oder bei plötzlichem Streit mit dem Arbeitgeber ist schneller Rat gefragt. Doch welchen Anwalt soll man beauftragen? Für viele Menschen wird diese Entscheidung zur Qual der Wahl. Mittlerweile sind mehr als 165.000 Rechtsanwälte in Deutschland zugelassen.</p>

<p>Rechtsschutzversicherer bieten Orientierung im Konflikt. Das heißt neben der Übernahme der ggf. hohen Kosten eines Rechtsstreits stehen immer mehr Services rund um die Klärung des Streitfalls zur Verfügung. Die Empfehlung eines kompetenten Anwalts in der Nähe ist nur eine Leistung von vielen. Auch der schnelle telefonische Rechtsrat durch einen Anwalt gehört in der Regel zur Versicherungsleistung.</p>

  `;
  return legalProtectionInsurance;
}

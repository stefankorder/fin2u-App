export default function riskLifeInsurance(user, insurances) {
  const riskLifeInsurance = insurances.find(
    (insurance) => insurance.value === "riskLife"
  );
  if (!user.insurancesAlreadyHave.includes("riskLife")) {
    if (user.age < 60 && user.houseOwner) {
      riskLifeInsurance.status = 3;
      riskLifeInsurance.text = `
      
<p>${user.name}, du hast angegeben, dass du bisher keine Riskolebensversicherung abgeschlossen hast und eine Immobilie besitzt. Sofern deine Immobilie noch nicht abbezahlt ist, du aber einen Teil der monatlichen Raten zahlst, solltest du darüber nachdenken deine Hinterbliebnen im Todesfall vor finanziellen Einbußen zu schützen. Dies gilt insbesondere, wenn du der Alleinverdiener / die Alleinverdienerin bist. Andernfalls kann es passieren, dass deine Hinterbliebenen die Immobilie verkaufen müssen. Was eine Risikolebensversicherung genau ist und was sie leistet, erfährst du in den nachfolgenden Zeilen.</p>
      
      `;
    } else if (
      user.age < 60 &&
      (user.relationship === "married" ||
        user.relationship === "inRelationship")
    ) {
      riskLifeInsurance.status = 2;
      riskLifeInsurance.text = `
      
<p>${user.name}, du hast angegeben, dass du bisher keine Riskolebensversicherung abgeschlossen hast. Du solltest auf jeden Fall darüber nachdenken deine Hinterbliebnen im Todesfall vor finanziellen Einbußen zu schützen. Dies gilt insbesondere, wenn du der Alleinverdiener / die Alleinverdienerin bist. Was eine Risikolebensversicherung genau ist und was sie leistet, erfährst du in den nachfolgenden Zeilen.</p>
      
      `;
    } else {
      riskLifeInsurance.status = 1;
      riskLifeInsurance.text = `
      
<p>${user.name}, du hast angegeben, dass du bisher keine Riskolebensversicherung abgeschlossen hast. Du solltest darüber nachdenken deine Hinterbliebnen im Todesfall vor finanziellen Einbußen zu schützen. Dies gilt insbesondere, wenn du der Alleinverdiener / die Alleinverdienerin bist. Was eine Risikolebensversicherung genau ist und was sie leistet, erfährst du in den nachfolgenden Zeilen.</p>
      
      `;
    }
  } else {
    riskLifeInsurance.status = 0;
    riskLifeInsurance.text = `
    
<p>${user.name}, du hast angegeben, dass du bereits eine Riskolebensversicherung abgeschlossen hast. Glückwunsch, somit schützt du deine Hinterbliebenen im Todesfall vor finanziellen Einbußen. Was eine Risikolebensversicherung genau ist und was sie leistet, erfährst du in den nachfolgenden Zeilen.</p>
    
    `;
  }
  riskLifeInsurance.text += `

<h2>Was ist die Risikolebensversicherung?</h2>

<p>Wer eine Risikolebensversicherung abschließt, sichert seine Angehörigen gegen den eigenen Todesfall finanziell ab. Konkret: Wenn der Versicherte stirbt, erhalten die Hinterbliebenen einen festgelegten Geldbetrag, die sogenannte Todesfallsumme.</p>
  
<p>Risikolebensversicherungen sind umso wichtiger, je höher die finanzielle Belastung durch den Wegfall eines Einkommens ist - sei es, weil ein Kredit abzubezahlen ist, oder weil Kinder zu versorgen sind.</p>
  
<p>Bei dieser Versicherung kann man zwischen zwei Varianten wählen: Die Variante mit konstanter Versicherungs­summe und eine Variante in der die vereinbarte Versicherungssumme im Laufe der Vertragszeit nach einem vereinbarten Plan sinkt.</p>
  
<h2>Wann zahlt eine Risikolebensversicherung?</h2>

<p>Für den Fall, dass eine Person frühzeitig stirbt, sollten Familien mit einer Risikolebensversicherung vorsorgen – im Interesse der Kinder und auch des Lebenspartners. Sollte die versicherte Person sterben, zahlt diese Police den Hinterbliebenen einen vorab festgelegten Geldbetrag, die Todesfallsumme. In dieser schwierigen Situation kann die Risikolebensversicherung helfen, finanzielle Verpflichtungen zu erfüllen. Zum Beispiel kann die Versicherung<p>
  
<ul>
  <li>den Verlust des Einkommens der verstorbenen Person kompensieren,</li>
  <li>laufende Kredite für das Haus tilgen und Leasingverträge bedienen (Auto, Konsumgüter, etc.) oder</li>
  <li>die Ausbildung der Kinder weiterfinanzieren.</li>
</ul>
      
<p>Neben der finanziellen Absicherung in Form der Todesfall-Leistung hat diese Versicherung auch einen immateriellen Wert: Sie bringt Sicherheit ins Leben einer Familie und schafft die Gewissheit, im Todesfall den gewohnten Lebensstandard weitestgehend fortführen zu können.</p>
  
<h2>Kurz und bündig: Welche Vorteile bieten Risikolebensversicherungen?</h2>
  
<ul>
  <li>Niedrige Beiträge bei hoher Versicherungssumme.</li>
  <li>Schützt Hinterbliebene vor existenzbedrohenden finanziellen Belastungen.</li>
<ul>
  
`;
  return riskLifeInsurance;
}

export default function pensionInsurance(user, insurances) {
  const pensionInsurance = insurances.find(
    (insurance) => insurance.value === "pensionInsurance"
  );
  if (!user.insurancesAlreadyHave.includes("pensionInsurance")) {
    if (user.age < 30) {
      pensionInsurance.status = 2;
      pensionInsurance.text = `

<p> ${user.name}, du hast angegeben, dass du noch keine Rentenversicherung abgeschlossen hast. Da du mit ${user.age} Jahren noch jung bist und es durch die längere Spardauer und den Zineszinseffekt mit jungen Jahren wesentlich leichter ist eine große Summe zusammnezusparen, solltest du am besten schon jetzt damit anfangen. Genaueres zur Lebensversicherung erfährst du in den nachfolgenden Zeilen.</p>
    
      `;
    } else if (user.age < 55 && user.age > 29) {
      pensionInsurance.status = 3;
      pensionInsurance.text = `

<p> ${user.name}, du hast angegeben, dass du noch keine Rentenversicherung abgeschlossen hast. Mit deinen ${user.age} Jahren solltest du auf jeden Fall für dein Alter vorsoregen. Je früher du damit anfängst, desto leichter lässt sich, durch die längere Spardauer und den Zineszinseffekt, eine größere Summe ansparen. Genaueres zur Lebensversicherung erfährst du in den nachfolgenden Zeilen.</p>
      
      `;
    } else if (user.age < 60 && user.age > 54) {
      pensionInsurance.status = 1;
      pensionInsurance.text = `

      <p> ${user.name}, du hast angegeben, dass du keine Rentenversicherung abgeschlossen hast. Mit deinen ${user.age} Jahren wird es schwierig noch eine vernünftige Altervorsorge aufzubauen. Da du aber noch unter 60 Jahre alt bis, solltest du schauen, dass du villeicht noch etwas für deine Altersvorsorge tust. Größere Summen werden dabei jedoch nicht mehr rumkommen. Genaueres zur Lebensversicherung erfährst du in den nachfolgenden Zeilen.</p>
            
            `;
    } else {
      pensionInsurance.status = 0;
      pensionInsurance.text = `

<p> ${user.name}, du hast angegeben, dass du keine Rentenversicherung abgeschlossen hast. Mit deinen ${user.age} Jahren wird es schwierig noch eine vernünftige Altervorsorge aufzubauen. Sofern du bereits Kapital auf anderem Weg angespart hat, kannst du dieses in eine sofortbeginnende Rentenversicherung investieren. Genaueres zur Lebensversicherung erfährst du in den nachfolgenden Zeilen.</p>
      
      `;
    }
  } else {
    pensionInsurance.status = 0;
    pensionInsurance.text = `

<p>${user.name}, du hast angegeben, dass du bereits eine Lebensversicherung abgeschlossen hast und somit für dein Alter vorsorgst. Beachte jedoch, dass du deine Rentenversicherung regeläßig überprüfst und an deine veränderten Lebenssituationen anpasst!</p>

`;
  }
  pensionInsurance.text += `

<h2>Was ist die (Kapital)lebensversicherung?</h2>

<p>Renten- und Lebensversicherungen bieten ihren Kunden garantierte Leistungen im Alter, zum Beispiel in Form einer monatlichen Rente oder einer einmaligen Kapitalauszahlung. Beide Produkte sind aber mehr als reine Altersvorsorgeprodukte.</p>

<p>Die Lebensversicherung kombiniert die Vorteile einer privaten Altersvorsorge mit der finanziellen Absicherung von Angehörigen – und das ab Vertragsbeginn. Darüber hinaus können sich die Kunden zusätzlich vor Risiken wie Unfall oder Berufsunfähigkeit schützen.</p>

<p>Im Gegensatz zur privaten Rentenversicherung ist bei der Lebensversicherung die finanzielle Absicherung von Hinterbliebenen von vorne herein integriert.</p>

<h2>Was leistet die Lebensversicherung?</h2>

<p>Mit der Kapitallebensversicherung kann der Kunde für den Ruhestand vorsorgen und zugleich seine Angehörigen absichern. Der Kunde bekommt eine einmalige Versicherungssumme ausgezahlt, die sich aus seinen eingezahlten Beiträgen, dem garantierten Zinssatz und den erwirtschafteten Überschüssen des Unternehmens zusammensetzt. Der garantierte Zinssatz liegt aktuell bei 0,9 % und gilt für die gesamte Laufzeit des Versicherungsvertrages.</p>

  `;
  return pensionInsurance;
}

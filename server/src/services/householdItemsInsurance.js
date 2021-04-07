export default function householdItemsInsurance(user, insurances) {
  const householdItemsInsurance = insurances.find(
    (insurance) => insurance.value === "householdItems"
  );
  if (!user.insurancesAlreadyHave.includes("householdItems")) {
    if (user.valuables) {
      householdItemsInsurance.status = 3;
      householdItemsInsurance.text = `
      
<p>${user.name}, du hast angegeben, dass du bisher keine Hausratversicherung abgeschlossen hast und Wertgegenstände besitzt. Um dich vor den finaziellen Folgen der Zerstörung, insbesondere aber auch des Diebstahls, deiner Wertgegenstände zu schützen, sollest du auf jeden Fall darüber nachdenken eine Hausratversicherung abzuschließen.</p> <p><strong>Bitte achte dabei auf eine ausreichend große Versicherungssumme für deine Wertgegenstände und schaue dir die Bedingungen bzgl. deiner Wertgegenstände genaustens an!</strong></p>  <p>Was eine Hausratversicherung ist, was sie alles leistet und wieso sie vor allem für dich attraktiv ist, erfährst du in den nachfolgenden Zeilen.</p>
      
      `;
    } else {
      householdItemsInsurance.status = 1;
      householdItemsInsurance.text = `
      
<p>${user.name}, du hast angegeben, dass du bisher keine Hausratversicherung abgeschlossen hast. Überlege dir gut dich gegen die finanziellen Folgen durch Gefahren, wie z. B. Feuer oder Sturm, an deinem Hausrat abzusichern. Was eine Hausratversicherung ist, was sie alles leistet und wieso sie auch für dich attraktiv sein kann, erfährst du in den nachfolgenden Zeilen.</p>
      
      `;
    }
  } else {
    householdItemsInsurance.status = 0;
    householdItemsInsurance.text = `
    
<p>${user.name}, du hast angegeben, dass bereits eine Hausratversicherung abgeschlossen hast. Glückwunsch, somit bist du vor den finanziellen Folgen, die durch Gefahren, wie z. B. Feuer oder Sturm, an deinem Hausrat entstehen können bestens geschützt.</p> <p><strong>Bitte denke daran deinen Versicherungsschutz regelmäßig zu aktualisieren, insbesondere wenn du umziehst oder du dir Wertgegenstände anschaffst, solltest du deinen Versicherungsschutz überprüfen (lassen)!</strong></p> <p> Was eine Hausratversicherung ist und was sie alles leistet, erfährst du in den nachfolgenden Zeilen.</p>
    
    `;
  }
  householdItemsInsurance.text += `

<h2>Auf einen Blick</h2>

<img src="/images/hausrat-infografik-produktseite-data.jpg">
  
<h2>Was ist die Hausratversicherung?</h2>

<p>Über die Hausratversicherung ist der komplette Hausrat von Möbeln über Kleidung bis hin zu Elektrogeräten abgesichert. Sie kommt auf für Schäden durch:</p>

<ul>
  <li>Feuer</li>
  <li>Blitzschlag, Explosion oder Implosion</li>
  <li>Einbruchdiebstahl</li>
  <li>Sturm (ab Windstärke 8) und Hagel</li>
  <li>Leitungswasser</li>
  <li>Überspannung</li>
</ul>

<p>Der Versicherungsschutz kann durch zusätzliche Vertragselemente, wie zum Beispiel Fahrraddiebstahl, erweitert werden.</p>

<h2>Was versichert die Hausratversicherung?</h2>

<p>Versichert ist das gesamte bewegliche Eigentum, das in der Wohnung und den dazugehörigen Nebenräumen untergebracht ist, zum Beispiel:</p>

<ul>
  <li>Möbel</li>
  <li>Bücher</li>
  <li>Kleidung</li>
  <li>Kinderspielzeug</li>
  <li>Teppiche und Lampen</li>
  <li>Geschirr</li>
  <li>Computer und andere Elektrogeräte</li>
  <li>Kühlschrank</li>
  <li>und sogar das Futter für die Haustiere</li>
</ul>

<p>Auch Gegenstände in Keller oder Garage sind mitversichert, wie z. B. Rasenmäher oder Werkzeug. Im Rahmen eines Schadens – z. B. Wohnungsbrand – übernimmt die Hausratversicherung für gewisse Zeit auch die Kosten für Hotelübernachtungen, Aufräumarbeiten bzw. Transport und Lagerung des Eigentums, wenn die Wohnung geräumt werden muss.</p>

<p>Viele Versicherer bieten neben diesen Standards weitere Vertragselemente an – mit oder ohne Zuschlag. So zahlen sie in bestimmtem Umfang zum Beispiel auch bei Diebstahl von Gartenmöbeln.</p>

<h2>Wie sind Bargeld, Schmuck und Wertsachen in der Hausratversicherung abgedeckt?</h2>

<p>Mit zum Hausrat können auch Wertsachen gehören. Dazu zählen etwa:</p>

<ul>
  <li>Urkunden, Sparbücher, Wertpapiere</li>
  <li>Schmucksachen, Edelsteine, Perlen, Briefmarken, Münzen, Medaillen und alle Sachen aus Gold oder Platin</li>
  <li>Pelze, handgeknüpfte Teppiche, Gobelins und Kunstgegenstände</li>
  <li>Antiquitäten, die über 100 Jahre alt sind, mit Ausnahme von Möbelstücken</li>
</ul>

<p>Aber auch Bargeld und Geldbeträge, die auf Karten oder sonstigen Datenträgern geladen sind, gehören zu den Wertsachen.</p>

<h2>Versicherungssumme für Wertsachen ist begrenzt</h2>

<p>Wertsachen sind bis zu einem bestimmten Betrag in der Hausratversicherung mitversichert. Man spricht hier von Entschädigungsgrenzen. Meist gilt eine Höchstgrenze von etwa 20 Prozent der gesamten Versicherungssumme. Je nachdem, um welche Wertsachen es sich handelt, kann die Entschädigungsgrenze unterschiedlich hoch sein.</p>

<p>Die Höchstgrenze für Bargeld liegt häufig bei 1.000 bis 2.000 Euro. Andere Möglichkeit: Im Versicherungsvertrag ist ein prozentualer Anteil der Versicherungssumme festgelegt - zum Beispiel ein Prozent. Man bekommt also nur maximal den Betrag ersetzt, der durch die Entschädigungshöchstgrenze festgelegt wurde.</p>

<p>Wird das Geld in einem Tresor verwahrt, der baulich mit dem Haus verbunden ist, liegen die Grenzen meist höher.</p>

<p>Wie hoch die Entschädigungsgrenzen für Wertsachen sind, hängt vom Versicherer und dem gewählten Versicherungstarif ab. Derjenige, der teure Wertsachen zu Hause hat, kann diese auch versichern, indem er mit seinem Hausratversicherer eine ausreichend hohe Versicherungssumme vereinbart. Fazit: Größere Summen Bargeld oder Karten mit höheren geladenen Geldbeträgen sollten nicht zu Hause aufbewahrt werden.</p>
  
  `;
  return householdItemsInsurance;
}

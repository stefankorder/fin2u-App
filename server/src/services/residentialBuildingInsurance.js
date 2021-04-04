export default function residentialBuildingInsurance(user, insurances) {
  const residentialBuildingInsurance = insurances.find(
    (insurance) => insurance.value === "residentialBuilding"
  );
  if (
    user.houseOwner &&
    !user.insurancesAlreadyHave.includes("residentialBuilding")
  ) {
    residentialBuildingInsurance.status = 3;
    residentialBuildingInsurance.text = `
    
<p>${user.name}, du hast angegeben, dass du eine Immobilie besitzt, bisher aber keine Wohngebäudeversicherung abgeschlossen hast.</p> <p><strong>Bitte denke intensiv darüber nach eine Wohngebäudeversicherung abzuschließen, sie schützt dich vor den finanziellen Folgen, die durch Gefahren, wie z. B. Feuer oder Sturm, an deiner Immobilie entstehen können. Andernfalls risikierst du den Werterhalt deiner Immobilie. Sie zählt für dich somit zu den wichtigsten Versicherungen!</strong></p> <p>Was eine Wohngebäudeversicherung ist und wieso sie vor allem für dich so wichtig ist, erfährst du in den nachfolgenden Zeilen.</p>
    
    `;
  } else {
    residentialBuildingInsurance.status = 0;
    residentialBuildingInsurance.text = `
    
<p>${user.name}, du hast angegeben, dass ${
      user.houseOwner
        ? "bereits eine Wohngebäudeversicherung abgeschlossen hast. Glückwunsch, somit bist du vor den finanziellen Folgen, die durch Gefahren, wie z. B. Feuer oder Sturm, an deiner Immobilie entstehen können bestens geschützt.</p> <p><strong>Bitte denke daran deinen Versicherungsschutz regelmäßig zu aktualisieren, insbesondere wenn du dein Gebäude erweiterst, modernisierst oder es für einige Zeit leerstehen wird, solltest du deinen Versicherungsschutz überprüfen (lassen)!</strong></p><p>"
        : "du keine Immobilie besitzt und daher keine Wohngebäudeversicherung benötigst."
    }   Was eine Wohngebäudeversicherung ist und was sie alles leistet, erfährst du in den nachfolgenden Zeilen.</p>
    
    `;
  }
  residentialBuildingInsurance.text += `
  
<h2>Was leistet die Wohngebäudeversicherung?</h2>

<p>Die Wohngebäudeversicherung schützt den Eigentümer eines Hauses vor den finanziellen Folgen eines Sachschadens. Versichert ist das gesamte Gebäude einschließlich aller fest eingebauten Gegenstände. In der Regel sind Schäden durch folgende Gefahren abgedeckt:</p>

<h2>Feuer</h2>

<p>Nach einem Brand zahlt die Wohngebäudeversicherung. Außerdem gibt es Schadenersatz für Kosten durch Löschwasser und Ruß.</p>

<h2>Blitzschlag, Explosion oder Implosion</h2>

<p>Diese Ereignisse können einen Totalschaden bedeuten.</p>

<h2>Sturm (ab Windstärke 8) und Hagel</h2>

<p>Bei Sturmschäden zum Beispiel am Dach ist Windstärke 8 entscheidend. Dann gibt es ein neues Dach oder die Wohngebäudeversicherung finanziert die Reparatur des alten. Bei Hagelschäden zahlt die Versicherung unabhängig von der Windstärke.</p>

<h2>Leitungswasser</h2>

<p>Platzen Wasserrohre, zahlt die Wohngebäudeversicherung Schadenersatz. Versichert sind Schäden durch wasserführende Leitungen und die dazugehörigen Anlagen: Wasserversorgung und -entsorgung, Heizkörper und -rohre, Wasch- und Spülmaschinen, Klima- und Wärmepumpen. Auch Aquarien oder Wasserbetten können inklusive sein</p>

<h2>Überspannung</h2>

<p>Versichert sind auch Schäden an versicherten Sachen durch Überspannung als Folge eines Blitzschlags.</p>

<p>Der Versicherungsschutz kann durch zusätzliche Vertragselemente erweitert werden, wie zum Beispiel um sich vor Starkregen/Überschwemmung/Rückstau (Elementarschadenversicherung) zu schützen.</p>

<h2>Wohngebäudeversicherung individuell anpassen</h2>

<p>Vor dem Vertragsabschluss sollte man sich gut beraten lassen. Denn einige Gefahren müssen durch separate Vereinbarungen versichert werden:</p>

<h2>Naturgefahren</h2>

<p>Wie Überschwemmung, Starkregen, Erdbeben oder Vulkanausbruch – abgedeckt über erweiterte Naturgefahrenversicherung.</p>

<h2>Photovoltaik-, Solarthermie-, Geothermie- und  Wärmepumpenanlagen</h2>

<p>Auch für alternative Energiequellen gibt es spezielle Policen. Wird zum Beispiel über eine Photovoltaikanlage Strom ins öffentliche Netz eingespeist, empfiehlt sich eine Ertragsausfallpolice. Sie schützt vor dem Risiko eines Ertragsausfalls infolge eines versicherten Sachschadens.</p>

<p>Je nach Anbieter können weitere Extras vereinbart werden, etwa:</p>

<ul>
  <li>Vandalismus- und Graffiti-Schäden am Gebäude</li>
  <li>Aufräum- und Wiederherstellungsarbeiten außerhalb des Gebäudes, zum Beispiel nach einem Sturm.</li>
</ul>  

<h2>Drei wichtige Schritte im Schadenfall</h2>

<p>Bei einem Schaden ist der Ablauf in der Regel immer der gleiche:</p>
  
<ul>
  <li>Versicherer informieren</li>
  <li>Schaden dokumentieren (z. B. durch Fotos)</li>
  <li>Reparaturen und Aufräumarbeiten nur in Abstimmung mit dem Versicherer durchführen</li>
</ul>
       
<p>Laut Versicherungsvertrag ist man dazu verpflichtet, den Schaden so gering wie möglich zu halten. Das heißt z. B. bei einem Leitungswasserschaden: den durchnässten Boden schnell trocknen, damit nicht noch mehr Wasser nach unten sickert.</p>
    
<h2>Was bedeutet Gefahrerhöhung in der Wohngebäudeversicherung?</h2>

<p>In der Wohngebäudepolice gibt es den Begriff der „Gefahrerhöhung“. Das heißt: Die Versicherung muss über Ausnahmesituationen informiert werden, damit der Versicherungsschutz nicht gefährdet wird. Dazu zählt beispielsweise, wenn das Gebäude nicht genutzt wird oder wegen Baumaßnahmen vorübergehend leer steht. Gleiches gilt, wenn in das Haus ein Gewerbe einzieht.</p>
    
<p>Tipp: Kunden sollten den Versicherer so schnell wie möglich über solche Ausnahmesituationen informieren. Oftmals genügt hier ein Anruf.</p>
    
<h2>Sinnvolle Ergänzung: Was ein Wohnungsschutzbrief nützt</h2>

<p>Es gibt aber häufig auch Situationen rund um Haus und Wohnung, die über reinen Sachschaden hinausgehen - beispielsweise wenn man sich ausgesperrt hat oder bei der Schädlingsbekämpfung. Für diese Notsituationen haben Versicherer Haus- und Wohnungsschutzbriefe entwickelt, die im Notfall konkrete Hilfe leisten.</p>

<p>Haus- und Wohnungsschutzbriefe werden in der Regel als Zusatzbaustein zu einer Hausrat- oder Wohngebäudeversicherung angeboten – vergleichbar mit einem Autoschutzbrief, der in Verbindung mit einer Kfz-Versicherung abgeschlossen werden kann.</p>
  
  `;
  return residentialBuildingInsurance;
}

export default function personalLiabilityInsurance(user, insurances) {
  const personalLiabilityInsurance = insurances.find(
    (insurance) => insurance.value === "personalLiability"
  );
  if (!user.insurancesAlreadyHave.includes("personalLiability")) {
    personalLiabilityInsurance.status = 3;
    personalLiabilityInsurance.text = `
    
<p> ${user.name}, du hast angegeben, dass du noch keine Privathaftpflichtversicherung abgeschlossen hast. Wieso die <strong>Privathaftpflichtversicherung</strong> zu den <strong>wichtigsten</strong> Versicherungen gehört und du <strong>unbedingt</strong> eine haben solltest wird dir in den nachfolgenden Zeilen erklärt.</p>

    `;
  } else {
    personalLiabilityInsurance.status = 0;
    personalLiabilityInsurance.text = `

<p>${user.name}, du hast angegeben, dass du bereits eine Privathaftpflichtversicherung und somit eine der <strong>wichtigsten</strong> Versicherungen überhaupt abgeschlosse hast. Wieso genau dies so ist, wird dir in den nachfolgenden Zeilen erklärt. <strong> Vergiss trotzdem nicht deinen Versicherungsschutz regelmäßig überprüfen zu lassen </strong></p>

    `;
  }
  personalLiabilityInsurance.text += `

<h2>Auf einen Blick</h2>

<img src="/images/haftpflicht-infografik-produktseite-bild-data_ohne_ueberschrift.jpg">
  
<h2>Was ist die private Haftpflichtversicherung?</h2>
  
<p>Ob aus Leichtsinn, Missgeschick oder Vergesslichkeit: Wer einen Schaden verursacht, muss dafür geradestehen. Das ist gesetzlich geregelt. Der Schadenverursacher muss dem Geschädigten Ersatz leisten – und zwar mit enormen finanziellen Folgen. Im schlimmsten Fall haftet der Verursacher mit Haus und Grundbesitz, mit seinem Bankguthaben, Lohn und Gehalt. Sogar auf eine spätere Erbschaft oder einen Lottogewinn kann zugegriffen werden. Der Verursacher haftet für den Schaden mit seinem gesamten Vermögen - im Extremfall bis zum finanziellen Ruin.</p>
  
<p>Wer sich und seine Familie umfassend schützen will, braucht deshalb eine private Haftpflichtversicherung. Sie versichert das finanzielle Risiko, das nach einem Schaden auf den Verursacher zukommen kann. Die Privathaftpflichtversicherung zählt zu den wichtigsten Versicherungen überhaupt.</p>
  
<h2>Was leistet die private Haftpflichtversicherung?</h2>
  
<p>Die Privathaftpflichtversicherung bietet dem Versicherten und seiner Familie Schutz vor Schadenersatzansprüchen. Dabei leistet sie mehr als bloß Ersatz für den materiellen Schaden. Zunächst prüft die Privathaftpflicht, ob und in welcher Höhe eine Verpflichtung zum Schadenersatz überhaupt besteht.</p>
  
<p>Die Haftpflichtversicherung wehrt auch Schadenersatzansprüche ab, die unbegründet sind. Kommt es in so einem Fall zum Rechtsstreit mit der Person, die Anspruch auf Schadenersatz stellt, führt der Haftpflichtversicherer den Prozess und trägt die Kosten. Die Haftpflichtversicherung bietet somit bei unberechtigten Haftungsansprüchen eine Art „passiven“ Rechtsschutz.</p>
  
  `;
  return personalLiabilityInsurance;
}

export default function animalKeeperInsurance(user, insurances) {
  const animalKeeperInsurance = insurances.find(
    (insurance) => insurance.value === "animalKeeper"
  );
  if (user.pet && !user.insurancesAlreadyHave.includes("animalKeeper")) {
    animalKeeperInsurance.status = 3;
    animalKeeperInsurance.text = `
    
    <p>${
      user.name
    }, du hast angegeben, dass du noch keine Tierhalterhaftpflichtversicherung abgeschlossen hast, aber ${
      user.petSpecies === "dog" ? "einen Hund" : "ein Pferd"
    } besitzt. Das bedeutet, dass du Dritten gegenüber für Schäden, die dein ${
      user.petSpecies === "dog" ? "Hund" : "Pferd"
    } verursacht, unabhängig von einem Verschulden von dir, haftest. <strong>Dein ${
      user.petSpecies === "dog" ? "Hund" : "Pferd"
    } muss im Schadenfall lediglich ein tierisches Verhalten gezeigt haben. Daher ist eine Tierhalterhaftpflicht für ${
      user.petSpecies === "dog" ? "Hundebesitzer" : "Pferdebesitzer"
    } so wichtig.</strong> Wieso du als Tierhalter eine Tierhalterhaftpflichtversicherung haben solltest, wird dir auch nochmal kurz in den nachfolgenden Zeilen erklärt.</p>
    
    `;
  } else {
    animalKeeperInsurance.status = 0;
    animalKeeperInsurance.text = `
    
    <p>${user.name}, du hast angegeben, dass du ${
      user.pet
        ? `bereits eine Tierhalterhaftpflicht abgeschlossen hast. Glückwunsch, somit bist du vor den finanziellen Folgen durch Schäden an Dritten durch ${
            user.petSpecies === "dog" ? "deinen Hund" : "dein Pferd"
          } geschützt!</p> <p><strong>Denke bitte daran deinen Versicherungsschutz trotzdem regelmäßig überprüfen zu lassen!</strong></p>`
        : "keinen Hund oder ein Pferd besitzt und somit keine Tierhalterhaftpflicht benötigst.</p> <p><strong>Solltest du daüber nachdenken einen Hund oder ein Pferd zu kaufen, denke bitte auch daran, dich um eine entsprechende Haftpflichtversicherung zu kümmern!</strong></p>"
    } <p>Wieso du als Tierhalter eine Tierhalterhaftpflichtversicherung haben solltest, wird dir auch nochmal kurz in den nachfolgenden Zeilen erklärt.</p>
    
    `;
  }
  animalKeeperInsurance.text += `
  
<h2>Was ist die Tierhalterhaftpflichtversicherung?</h2>

<p>Zunächst muss man wissen, dass die Tierhalterhaftpflichtversicherung ein Oberbegriff ist, da es zwei verschiedene Versicherungen in diesem Bereich gibt: die Hundehaftpflicht und die Pferdehaftpflicht.</p>

<p>Alle anderen (Haus-)Tiere wie zum Beispiel Katzen, Hamster oder Meerschweinchen sind bereits im Rahmen der normalen Privathaftpflicht im Versicherungsschutz enthalten. Möchte sich der Tierhalter allerdings gegen Schäden absichern, die von seinem Hund oder seinem Pferd verursacht werden, ist der Abschluss einer Tierhalterhaftpflicht absolut sinnvoll.</p>

<p>Diese spezielle Art der Haftpflichtversicherung dient vor allem dazu, die Kosten für einen Schaden an fremden Personen oder Sachen zu übernehmen, der durch das versicherte Tier des Halters verursacht worden ist. Da bei Tieren kein Vorsatz unterstellt werden kann, gibt es auch nur wenige Ausschlussgründe, wann die Versicherungsgesellschaft im Schadensfall die Leistung verweigern wird.</p>

  `;
  return animalKeeperInsurance;
}

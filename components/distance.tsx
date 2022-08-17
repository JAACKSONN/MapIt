const commutesPerYear = 260 * 2;
const litresPerKM = 10 / 100;
const gasLitreCost = 1.5;
const litreCostKM = litresPerKM * gasLitreCost;
const secondsToMinutes = 1/60
const kilometersToMiles = 0.621371
const SURGE_CHARGE_RATE = 1.15

 
type DistanceProps = {
  leg: google.maps.DirectionsLeg;
};

export default function Distance({ leg }: DistanceProps) {
  if (!leg.distance || !leg.duration) return null;

  const time = Math.floor(
    (leg.duration.value) * secondsToMinutes
  );
  const taxiCost = Math.round(100 * (((leg.distance.value / 1000) * 1.30) + 2.60))/100;
 
  const uberCost = Math.round(100 * (leg.distance.value * kilometersToMiles / 1000) * SURGE_CHARGE_RATE) / 100 + 2.5

  const lyftCost = Math.round(100 * (leg.distance.value * kilometersToMiles / 1000) * 1.1) / 100

  const spinCost = Math.round(100 * (((leg.distance.value / 1000) * 60 * 0.29) / 16)) / 100 + 1

  const spinTime = Math.floor((leg.distance.value / 1000) * 60 / 16)

  return (
    <div>
      <p>
        This location is <span className="highlight">{leg.distance.text}</span> or {" "}
        <span className="highlight">{leg.duration.text}</span> away.
      </p>

      <p>
        A standard taxi in this city will cost you {" "}
        <span className="highlight">
          ${new Intl.NumberFormat().format(taxiCost)}
        </span>
      </p>
      <p>
        UberX will cost you {" "}
        <span className="highlight">
          ${new Intl.NumberFormat().format(uberCost)}
        </span>
      </p>
      <p>
        Lyft will cost you {" "}
        <span className="highlight">
          ${new Intl.NumberFormat().format(lyftCost)}
        </span>
      </p>
      <p>
        A Spin scooter will cost you {" "}
        <span className="highlight">
          ${new Intl.NumberFormat().format(spinCost)}
        </span>
        , but will take <span className="highlight">{spinTime} minutes </span> instead
      </p>

    </div>
  );
}

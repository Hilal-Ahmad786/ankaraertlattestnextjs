export default function CityExampleCase({ text }: { text: string }) {
  return (
    <section className="city-example-case" data-city-reveal aria-labelledby="city-example-title">
      <p className="city-example-kicker">Temsili örnek</p>
      <h3 id="city-example-title" className="city-detail-heading">Bir araç başvurusu nasıl değerlendirilir?</h3>
      <p>{text}</p>
      <span className="city-motif-note">Gerçek müşteri vakası değildir.</span>
    </section>
  );
}

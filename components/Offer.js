import DetailDialog from "./DetailDialog";

const data = {
  item1: {
    title: "Organizace plesu",
    content: [
      <h2>Organizace Vašeho plesu, koordinátor na Vašem plese</h2>,
      <p>Jak probíhá služba organizace a koordinace Vašeho plesu?</p>,
      <p>
        Náš koordinátor Vás navštíví ve třídě a probere s Vámi Vaše představy,
        požadavky a získá od Vás základní informace k Vašemu plesu. Následně Vám
        připraví nabídku služeb s cenami, které jsou pro maturanty většinou
        klíčové, představí Vám své nápady k Vašemu plesu a danému tématu. Dále
        se s Vámi náš koordinátor bude potkávat dle Vašich potřeb, bude na
        telefonu a kdykoliv Vám bude k dispozici zodpovědět Vaše dotazy.
      </p>,
      <p>
        Koordinace na plese je výhrou a to doslova. Náš koordinátor Vám bude k
        dispozici od příprav po konec plesu, bude za Vás řešit případné
        problémy, které na plesech někdy nastávají. Dále bude komunikovat s
        účinkujícími, zajišťovat bezproblémový průběh plesu, postará se o
        doprovodný a zábavný program pro diváky a další věci, které oceníte.
      </p>,
      <p>
        Zeptejte se svých spolužáků, kteří svůj ples organizovali, zda by bývali
        raději nenechali tuto činnost na někom zkušeným a svůj velký den si
        užili na plno a bez starostí.
      </p>
    ]
  },
  item2: {
    title: "Maturitní choreografie",
    content: [
      <h2>
        Maturitní chorografie (předtančení, promenáda, nástup, půlnoční
        překvapení)
      </h2>,
      <p>
        Maturitní předtančení je jedním z nejdůležitějších bodů Vašeho plesu.
        Právě předtančení zahajuje ples a pokud má opravdu šťávu, lidé o tom
        hovoří nejen na plese, ale ještě dlouho, dlouho po něm. Naším cílem je
        brát každou třídu a jejich téma jako unikát, něco, co se neopakuje po
        minulých ročnících, tak jak to někdy bývá. Nebojíme se experimentovat s
        kulisami a akrobatickými prvky. Naši maturanti chodí na lekce vždy
        nadšení a po čase se některým tanec stane závislostí.
      </p>,
      <p>
        Snažíme se naše choreografie dělat velmi pestré, zábavné, propracované a
        především originální.
      </p>
    ]
  },
  item3: {
    title: "Kapela",
    content: [
      <p>
        Kapela je nepostradatelnou součástí maturitních plesů. Chcete se dobře
        bavit na pořádné hity a protančit celou noc? Pak neváhejte a kontaktujte
        nás pro více informací.
      </p>
    ]
  },
  item4: {
    title: "Foto & Video",
    content: [
      <p>
        Kapela je nepostradatelnou součástí maturitních plesů. Chcete se dobře
        bavit na pořádné hity a protančit celou noc? Pak neváhejte a kontaktujte
        nás pro více informací.
      </p>
    ]
  },
  item5: {
    title: "Grafické práce & Tisk",
    content: [
      <h2>
        Grafické zpracování a tisk maturitních lístků, pozvánek a plakátů
      </h2>,
      <p>
        Nabízíme Vám grafické zpracování maturitních lístků, pozvánek a plakátů.
        Vše přizpůsobíme Vašim představám a požadavkům. Dále Vám nabídneme velmi
        nízkou cenu za tisk. Rádi Vám zašleme cenovou nabídku.
      </p>
    ]
  },
  item6: {
    title: "Moderátor",
    content: [
      <p>
        Moderátor je jedna z nejdůležitějších osob na maturitním plese. Provází
        Vás celým večerem a proto je důležité ho správně vybrat. Pokud chcete
        vtipného, pohotového a milého moderátora, víme jak na to. Kontaktujte
        nás pro více informací.
      </p>
    ]
  },
  item7: {
    title: "Maturitní šerpy",
    content: [
      <p>
        Maturitní šerpy a skleničky – chcete ušetřit, ale zároveň mít z čeho
        vybírat?
      </p>,
      <p>
        Nabízíme šerpy atlasové, taftové, třpytivé, saténové a vyšívané. Veškeré
        Vaše přání je naším rozkazem.
      </p>,
      <hr />,
      <p>
        Ceny maturitních šerp začínají na <strong>62,- Kč za kus</strong>
      </p>,
      <p>
        Maturitní skleničky začínají na ceně <strong>50,- Kč za kus</strong>
      </p>
    ]
  },
  item8: {
    title: "Dárky do tomboly",
    content: [
      <p>Pomůžeme Vám do tomboly sehnat zajímavé dárky a ceny.</p>,
      <p>
        Víte kolik peněz mohou maturanti získat za prodej tomboly? Rádi Vám
        pomůžeme tombolu postavit tak, aby se všechny lístky prodaly.
      </p>,
      <p>
        Dárky do tomboly poskytujeme pouze třídám, které si u nás objednají
        minimálně dvě z následujících služeb –{" "}
        <strong>organizace na míru</strong>, <strong>choreografie</strong>
        ,&nbsp;
        <strong>kompletní fotoslužby</strong> nebo <strong>video</strong>.
      </p>
    ]
  },
  item9: {
    title: "Výzdoba plesu",
    content: [
      <h2>Výzdoba plesu</h2>,
      <p>
        Každý ples je originál, proto je potřeba Vaše představy a požadavky
        projednat předem. Stačí nám zadat téma, Váš rozpočet, který na výzdobu
        máte a my Vám připravíme návrhy, které si předem ve třídě odhlasujete.
        Váš ples musí být jedinečný a to my umíme.
      </p>,
      <h2>Květiny s dovozem na Váš ples</h2>,
      <p>
        Rádi Vám zajistíme dle Vašich představ květiny, které si sami vyberete.
        Pomůžeme Vám sestavit pro třídní profesorku a profesorský sbor velký
        puket květin, které jsou čerstvé a nezvadnou do druhého dne. Rádi Vám
        předem ukážeme na fotografií jak Váš puket bude vypadat, abyste následně
        nebyli zklamání z velikosti, barvy, atd.
      </p>,
      <p>
        Veškeré květiny Vám dovezeme v den Vašeho plesu čerstvé s vodou přímo na
        místo konání. Nebudete mít žádné starosti.
      </p>
    ]
  },
  item10: {
    title: "Společenské šaty",
    content: [
      <p>
        Máme pro Vás připravenou luxusní nabídku maturitních šatů od známých
        návrhářů. Kompletní nabídku naleznete ZDE http://victorysalon.cz S námi
        získáte až 400,- Kč slevu na zapůjčení společenských šatů (poskytujeme
        pouze třídám, které si u nás objednají minimálně dvě z následujících
        služeb – organizace na míru, choreografie, kompletní fotoslužby nebo
        video.)
      </p>
    ]
  },
  item11: {
    title: "Ozvučení",
    content: [<p>Užijte si na svém plese jedinečný poslech ze všech stran.</p>]
  },
  item12: {
    title: "Osvětlení",
    content: [<p>Užijte si na svém plese jedinečný poslech ze všech stran.</p>]
  }
};

export default class extends React.Component {
  constructor(offerDialog) {
    super();
    this.state = { offerDialogOpened: false };
    this.toggleOfferDialog = this.toggleOfferDialog.bind(this);
    this.offerDialogTitle = undefined;
    this.offerDialogContent = undefined;
  }

  toggleOfferDialog(title, content) {
    if (this.state.offerDialogOpened === false) {
      this.setState(() => ({
        offerDialogOpened: true,
        offerDialogTitle: title,
        offerDialogContent: content
      }));
      document.body.classList.add("dialog-active");
    } else {
      this.setState(() => ({
        offerDialogOpened: false
      }));
      document.body.classList.remove("dialog-active");
    }
  }

  render() {
    return (
      <section className="section section--light" id="nabidka">
        <div className="section__content">
          <h1>Co nabízíme</h1>
          <p>
            Nabízíme kompletní služby pro Váš maturitní ples. Pomocí našeho
            poptávkového průvodce si můžete vytvořit balíček šitý přímo Vám na
            míru!
          </p>
          <ul className="offer">
            <li
              onClick={() =>
                this.toggleOfferDialog(data.item1.title, data.item1.content)
              }
            >
              <div className="offer__avatar" />
              <div className="offer__label">Organizace plesu</div>
            </li>
            <li
              onClick={() =>
                this.toggleOfferDialog(data.item2.title, data.item2.content)
              }
            >
              <div className="offer__avatar" />
              <div className="offer__label">Maturitní choreografie</div>
            </li>
            <li
              onClick={() =>
                this.toggleOfferDialog(data.item3.title, data.item3.content)
              }
            >
              <div className="offer__avatar" />
              <div className="offer__label">Kapela</div>
            </li>
            <li
              onClick={() =>
                this.toggleOfferDialog(data.item4.title, data.item4.content)
              }
            >
              <div className="offer__avatar" />
              <div className="offer__label">Foto &amp; Video</div>
            </li>
            <li
              onClick={() =>
                this.toggleOfferDialog(data.item5.title, data.item5.content)
              }
            >
              <div className="offer__avatar" />
              <div className="offer__label">
                Grafické práce
                <br />
                &amp; Tisk
              </div>
            </li>
            <li
              onClick={() =>
                this.toggleOfferDialog(data.item6.title, data.item6.content)
              }
            >
              <div className="offer__avatar" />
              <div className="offer__label">Moderátor</div>
            </li>
            <li
              onClick={() =>
                this.toggleOfferDialog(data.item7.title, data.item7.content)
              }
            >
              <div className="offer__avatar" />
              <div className="offer__label">Maturitní šerpy</div>
            </li>
            <li
              onClick={() =>
                this.toggleOfferDialog(data.item8.title, data.item8.content)
              }
            >
              <div className="offer__avatar" />
              <div className="offer__label">
                Dárky
                <br />
                do tomboly
              </div>
            </li>
            <li
              onClick={() =>
                this.toggleOfferDialog(data.item9.title, data.item9.content)
              }
            >
              <div className="offer__avatar" />
              <div className="offer__label">Výzdoba plesu</div>
            </li>
            <li
              onClick={() =>
                this.toggleOfferDialog(data.item10.title, data.item10.content)
              }
            >
              <div className="offer__avatar" />
              <div className="offer__label">Společenské šaty</div>
            </li>
            <li
              onClick={() =>
                this.toggleOfferDialog(data.item11.title, data.item11.content)
              }
            >
              <div className="offer__avatar" />
              <div className="offer__label">Ozvučení</div>
            </li>
            <li
              onClick={() =>
                this.toggleOfferDialog(data.item12.title, data.item12.content)
              }
            >
              <div className="offer__avatar" />
              <div className="offer__label">Osvětlení</div>
            </li>
          </ul>
          <button>Chci vědět více</button>
        </div>
        <DetailDialog
          classes={
            this.state.offerDialogOpened ? "dialog dialog--opened" : "dialog"
          }
          dialogHandler={this.toggleOfferDialog}
          title={this.state.offerDialogTitle}
          content={this.state.offerDialogContent}
        />
      </section>
    );
  }
}

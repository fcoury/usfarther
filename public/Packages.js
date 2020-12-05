const Packages = () => {
  const [loading, setLoading] = React.useState(false);
  const [packages, setPackages] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetch('/packages').then(r => {
      return r.json();
    }).then(res => {
      console.log('packages', res.packages);
      setPackages(res.packages);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div class="loading"><img src="https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif" /></div>;
  }

  const rows = packages.filter(p => !p.entregue).map(p => {
    const rawItems = p.itens && p.itens
      .filter(i => i && i.title && i.title.length && i.title !== 'Keyboard Kit' && i.title !== 'Keyboard Caps');
    const itens = rawItems.map(i => <li>{i.title}</li>);
    const images = p.itens && p.itens.map(i => <img width="150" src={i.imagem} />);
    return (
      <tr key={p.id}>
        {/* <td>{p.referencia}</td> */}
        <td>
          {p.rastreio}<br/>
          {p.data_hora_envio}
        </td>
        <td>
          {p.detalhes ? p.detalhes.track_description : null}<br/>
          {p.detalhes ? p.detalhes.entry_date_str : null}
        </td>
        <td>
          {rawItems.length ? <ul style={{ marginBottom: 20 }}>{itens}</ul> : null}
          <div>
            {(p.pesototal * 1.0).toFixed(2)}lbs/{(p.pesototal * 0.453592).toFixed(2)}kg
          </div>
        </td>
        <td>{images}</td>
      </tr>
    );
  });

  return <table><tbody>{rows}</tbody></table>;
};

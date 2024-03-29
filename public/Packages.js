const Packages = () => {
  const [loading, setLoading] = React.useState(false);
  const [packages, setPackages] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetch('/packages').then(r => {
      return r.json();
    }).then(res => {
      console.log('packages', res.packages);
      setPackages(res.packages.filter(p => !p.entregue && !(p.status && p.status.includes('Cancelado'))));
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="loading"><img src="https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif" /></div>;
  }

  const onClickTracking = idx => e => {
    const p = packages[idx];
    p.expanded = !p.expanded;
    setPackages([...packages.slice(0, idx), p, ...packages.slice(idx + 1)]);
  };

  const rows = packages.map((p, i) => {
    const rawItems = p.itens && p.itens.filter(i => i && i.title && parseInt(i.qtd, 10) === 0);
    const itens = rawItems.map(i => <li>{i.title}</li>);
    const images = p.itens && p.itens.map(i => <img width="150" src={i.imagem} />);
    const desc = p.detalhes && p.detalhes.track_description && p.detalhes.track_description.replace(/(<([^>]+)>)/gi, '');
    return (
      <tr key={p.id}>
        {/* <td>{p.referencia}</td> */}
        <td>
          {p.rastreio}<br />
          {p.data_hora_envio}<br /><br />
          {p.total}<br />
        </td>
        <td>
          {p.apelido ? <div style={{ marginBottom: 20 }}><b>{p.apelido}</b></div> : null}
          {!p.expanded && <div>
            {desc}<br />
            {p.detalhes ? p.detalhes.entry_date_str : null}
          </div>}
          {p.expanded && <ul>
            {p.rastreios && p.rastreios.map(r => <li>{r.entry_date_str} {r.track_description}</li>)}
          </ul>}
          <div onClick={onClickTracking(i)}>
            {p.expanded ? 'Hide' : 'Show'}
          </div>
        </td>
        <td>
          {rawItems.length ? <ul style={{ marginBottom: 20 }}>{itens}</ul> : null}
          <div>
            Frete: <br />
            {(p.pesototal * 1.0).toFixed(2)}lbs/{(p.pesototal * 0.453592).toFixed(2)}kg<br />
            {p.total_geral}
          </div>
        </td>
        <td>{images}</td>
      </tr>
    );
  });

  return <table><tbody>{rows}</tbody></table>;
};

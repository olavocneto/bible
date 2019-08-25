import { h, Component, Element } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
})
export class AppHome {

  @Element() el: HTMLElement;

  onKeyUpSearch(e) {
    const filter = e.target.value.toUpperCase();
    const list: NodeList = this.el.shadowRoot.querySelectorAll('ul > li');

    Array.from(list).forEach((li: HTMLLIElement) => {
      const anchor = li.getElementsByTagName('a');
      const livro = anchor.item(0).text.toUpperCase();

      if (filter === '' || livro.indexOf(filter) === 0) {
        li.style.display = 'inline';
      } else {
        li.style.display = 'none';
      }
    });

  }

  render() {
    return (

      <div class="container home">

        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <stencil-route-link url="/">
            <a class="navbar-brand" href="#">Bíblia Sagrada</a>
          </stencil-route-link>
        </nav>

        <div class="row">
          <div class="col-12">
            <form>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Pesquise aqui" onKeyUp={(e) => this.onKeyUpSearch(e)}/>
              </div>
            </form>
          </div>

          <div class="col-6">
            <h4>Velho Testamento</h4>
            <ul class="list-group velho-testamento">
              <li class="list-group-item"><stencil-route-link url="/chapter/gn"><a href="/chapter/gn">Gênesis</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/ex"><a href="/chapter/ex">Êxodo</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/lv"><a href="/chapter/lv">Levítico</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/nm"><a href="/chapter/nm">Números</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/dt"><a href="/chapter/dt">Deuteronômio</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/js"><a href="/chapter/js">Josué</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/jz"><a href="/chapter/jz">Juízes</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/rt"><a href="/chapter/rt">Rute</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/1s"><a href="/chapter/1sm">1 Samuel</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/2s"><a href="/chapter/2sm">2 Samuel</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/1r"><a href="/chapter/1rs">1 Reis</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/2r"><a href="/chapter/2rs">2 Reis</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/1c"><a href="/chapter/1cr">1 Crônicas</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/2c"><a href="/chapter/2cr">2 Crônicas</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/ed"><a href="/chapter/ed">Esdras</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/ne"><a href="/chapter/ne">Neemias</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/et"><a href="/chapter/et">Ester</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/jó"><a href="/chapter/jó">Jó</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/sl"><a href="/chapter/sl">Salmos</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/pv"><a href="/chapter/pv">Provérbios</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/ec"><a href="/chapter/ec">Eclesiastes</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/ct"><a href="/chapter/ct">Cânticos</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/is"><a href="/chapter/is">Isaías</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/jr"><a href="/chapter/jr">Jeremias</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/lm"><a href="/chapter/lm">Lamentações</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/ez"><a href="/chapter/ez">Ezequiel</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/dn"><a href="/chapter/dn">Daniel</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/os"><a href="/chapter/os">Oséias</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/jl"><a href="/chapter/jl">Joel</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/am"><a href="/chapter/am">Amós</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/ob"><a href="/chapter/ob">Obadias</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/jn"><a href="/chapter/jn">Jonas</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/mq"><a href="/chapter/mq">Miquéias</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/na"><a href="/chapter/na">Naum</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/hc"><a href="/chapter/hc">Habacuque</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/sf"><a href="/chapter/sf">Sofonias</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/ag"><a href="/chapter/ag">Ageu</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/zc"><a href="/chapter/zc">Zacarias</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/ml"><a href="/chapter/ml">Malaquias</a></stencil-route-link></li>
            </ul>
          </div>

          <div class="col-6">
            <h4>Novo Testamento</h4>
            <ul class="list-group">
              <li class="list-group-item"><stencil-route-link url="/chapter/mt"><a href="/chapter/mt">Mateus</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/mc"><a href="/chapter/mc">Marcos</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/lc"><a href="/chapter/lc">Lucas</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/jo"><a href="/chapter/jo">João</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/atos"><a href="/chapter/atos">Atos</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/rm"><a href="/chapter/rm">Romanos</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/1co"><a href="/chapter/1co">1 Coríntios</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/2co"><a href="/chapter/2co">2 Coríntios</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/gl"><a href="/chapter/gl">Gálatas</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/ef"><a href="/chapter/ef">Efésios</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/fp"><a href="/chapter/fp">Filipenses</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/cl"><a href="/chapter/cl">Colossenses</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/1ts"><a href="/chapter/1ts">1 Tessalonicenses</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/2ts"><a href="/chapter/2ts">2 Tessalonicenses</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/1tm"><a href="/chapter/1tm">1 Timóteo</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/2tm"><a href="/chapter/2tm">2 Timóteo</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/tt"><a href="/chapter/tt">Tito</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/fm"><a href="/chapter/fm">Filemom</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/hb"><a href="/chapter/hb">Hebreus</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/tg"><a href="/chapter/tg">Tiago</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/1pe"><a href="/chapter/1pe">1 Pedro</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/2pe"><a href="/chapter/2pe">2 Pedro</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/1jo"><a href="/chapter/1jo">1 João</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/2jo"><a href="/chapter/2jo">2 João</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/3jo"><a href="/chapter/3jo">3 João</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/jd"><a href="/chapter/jd">Judas</a></stencil-route-link></li>
              <li class="list-group-item"><stencil-route-link url="/chapter/ap"><a href="/chapter/ap">Apocalipse</a></stencil-route-link></li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

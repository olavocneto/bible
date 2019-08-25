import { h, Component, State, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

import { Book } from '../../global/interfaces';

@Component({
  tag: 'app-chapter',
  styleUrl: 'app-chapter.scss',
  shadow: true
})
export class AppChapter {

  @State() book: Book;

  @State() chapters: any[];

  @Prop() match: MatchResults;

  async componentDidLoad() {
      const response = await fetch('/assets/nvi.json');
      const data = await response.json();
      this.book = data.find((book) => book.abbrev === this.match.params.book);
      this.chapters = this.book.chapters;
  }

  render() {
    if (this.book) {
      return (

        <div class="container chapter">

          <h1>{this.book.name}</h1>
          <p>Capítulos</p>

          <div class="row">
            {this.chapters.map((_chapter, indice) => {
              return (
                <div class="col-3 p-0">
                  <stencil-route-link url={`/chapter/${this.match.params.book}/${indice}`}>
                    <button class="btn btn-light btn-lg btn-block" type="button">{indice + 1}</button>
                  </stencil-route-link>
                </div>
              );
            })}
          </div>

        </div>
      );
    } else {
      return (
        <div class="container chapter">
          <p>Carregando...</p>
        </div>
      );
    }
  }
}

const header = document.getElementById("headerComponent");

header.innerHTML = `
<div class="socialRow">
        <div class="socialRowDelimiter">
          <div class="websiteTitle">Vouanotar.com</div>
          <div class="socialIcons">
            <div class="socialButton">
              <a
                href="https://www.instagram.com/vouanotar"
                target="_blank"
                rel="noopener noreferrer"
                ><div class="socialIcon"></div>
              </a>
            </div>
            <div class="socialButton">
              <a
                href="https://www.youtube.com/@vouanotar"
                target="_blank"
                rel="noopener noreferrer"
                ><div class="socialIcon"></div></a
              >
            </div>
            <div class="socialButton">
              <a
                href="https://x.com/vouanotar"
                target="_blank"
                rel="noopener noreferrer"
                ><div class="socialIcon"></div></a
              >
            </div>
            <div class="socialButton">
              <a
                href="https://www.tiktok.com/@vouanotar"
                target="_blank"
                rel="noopener noreferrer"
                ><div class="socialIcon"></div></a
              >
            </div>
            <div class="socialButton">
              <a
                href="https://www.threads.net/@vouanotar"
                target="_blank"
                rel="noopener noreferrer"
                ><div class="socialIcon"></div></a
              >
            </div>
            <div class="socialButton">
              <a
                href="https://br.pinterest.com/vouanotar/"
                target="_blank"
                rel="noopener noreferrer"
                ><div class="socialIcon"></div></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="headerBackground">
        <div class="headerGradient"></div>
        <a href="https://vouanotar.netlify.app/"><div class="headerLogo" alt="site logo"></div></a>
      </div>
      <nav class="headerMenu">
        <div class="headerCategories" onclick="openMenu1()">
          <div class="burgerMenu"></div>
          <div class="menuCategories">Produtos</div>
        </div>
        <ul class="menuProductCategories">
          <a href="https://vouanotar.netlify.app/produtos/cadernos-digitais" rel"tag"><li class="menuproductCategory">Cadernos Digitais</li></a>
          <div class="starSparkle">H</div>
          <li class="menuproductCategory">Planners</li>
          <div class="starSparkle">H</div>
          <li class="menuproductCategory">Agendas Digitais</li>
          <div class="starSparkle">H</div>
          <li class="menuproductCategory">Blocos de Anotações</li>
          <div class="starSparkle">H</div>
          <li class="menuproductCategory">Notas Adesivas</li>
        </ul>
        <div class="headerCategories" onclick="openMenu2()">
          <div class="burgerMenu"></div>
          <div class="menuCategories">Categorias</div>
        </div>
      </nav>

    <div id="mobileLeftMenu">
      <div class="headerContent">
        <div id="closeButton" onclick="closeMenu1()">
          x
        </div>
      </div>

      <div id="mobileLeftMenuContent"></div>
    </div>

    <div id="mobileRightMenu">
      <div class="headerContent">
        <div id="closeButton" onclick="closeMenu2()">
          x
        </div>
      </div>

      <div id="mobileRightMenuContent"></div>
    </div>


`;

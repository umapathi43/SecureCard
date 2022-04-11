import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  ViewChild,
  ElementRef,
  Renderer2,
  HostListener,
} from "@angular/core";
import { ConfigService } from "../services/config.service";
import { Subscription } from "rxjs";
import { CustomizerService } from "../services/customizer.service";

@Component({
  selector: "app-customizer",
  templateUrl: "./customizer.component.html",
  styleUrls: ["./customizer.component.scss"],
})
export class CustomizerComponent implements OnInit, OnDestroy {
  @ViewChild("customizer") customizer: ElementRef;

  size: string;
  isBgImageDisplay: boolean = true;
  isOpen = true;
  public config: any = {};
  layoutSub: Subscription;
  bgColor: string;
  bgImage: string;

  constructor(
    private renderer: Renderer2,
    private configService: ConfigService,
    public customizerService: CustomizerService
  ) {
    this.config = this.configService.templateConf;
    this.isOpen = !this.config.layout.customizer.hidden;

    if (this.config.layout.sidebar.size) {
      this.size = this.config.layout.sidebar.size;
    }
    if (!this.config.layout.sidebar.backgroundColor) {
      this.bgColor = this.customizerService.light_dark_colors[7].code;
    } else {
      this.bgColor = this.config.layout.sidebar.backgroundColor;
    }
    if (!this.config.layout.sidebar.backgroundImage) {
      this.bgImage = "";
    } else {
      this.bgImage = this.config.layout.sidebar.backgroundImageURL;
    }
  }
  shortctKeys: any = [
    { name: "Sales Order", key: "Alt + S", color: "gradient-mint" },
    { name: "Purchase Entry", key: "Alt + P", color: "gradient-purple-love" },
    { name: "Purchase Order", key: "Alt + O", color: "gradient-ibiza-sunset" },
    { name: "Counter Sales", key: "Alt + C", color: "gradient-king-yna" },
    { name: "Back", key: "Shift + Esc", color: "gradient-mint" },
    {
      name: "Cash Withdraw",
      key: "Alt + Shift + C",
      color: "gradient-purple-love",
    },
  ];
  @Output() directionEvent = new EventEmitter<Object>();

  ngOnInit() {}

  changeSidebarWidth(value) {
    this.size = value;
    this.customizerService.changeSidebarWidth(value);
  }

  toggleCustomizer() {
    if (this.isOpen) {
      this.renderer.removeClass(this.customizer.nativeElement, "open");
      this.isOpen = false;
    } else {
      this.renderer.addClass(this.customizer.nativeElement, "open");
      this.isOpen = true;
    }
  }

  closeCustomizer() {
    this.renderer.removeClass(this.customizer.nativeElement, "open");
    this.isOpen = false;
  }
  @HostListener("window:keyup.esc") onKeyUp() {
    this.closeCustomizer();
  }
  bgImageDisplay(e) {
    if (e.target.checked) {
      this.isBgImageDisplay = true;
    } else {
      this.isBgImageDisplay = false;
    }
    //emit event to FUll Layout
    this.customizerService.bgImageDisplay(e);
  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }
}

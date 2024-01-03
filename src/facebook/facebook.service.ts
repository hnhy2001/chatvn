import { Injectable } from '@nestjs/common';
import { CreateFacebookDto } from './dto/create-facebook.dto';
import { UpdateFacebookDto } from './dto/update-facebook.dto';
import axios from 'axios';
import { PageService } from 'src/page/page.service';
import { CreatePageDto } from 'src/page/dto/create-page.dto';

@Injectable()
export class FacebookService {
  constructor(private pageService: PageService) { }

  async getLongSecretKey(code: string) {
    try {
      const accessToken = await this.getAccessToken(code);
      const longToken = await axios.get(process.env.GRAPH_FACEBOOK + "oauth/access_token", {
        params: {
          grant_type: "fb_exchange_token",
          client_id: process.env.APP_ID,
          client_secret: process.env.KEY_SCRECT,
          fb_exchange_token: accessToken
        }
      })
      const pageLongToken = await axios.get(process.env.GRAPH_FACEBOOK + "me/accounts", {
        params: {
          access_token: longToken.data.access_token
        }
      })
      let check = await this.pageService.check(pageLongToken.data.id);
      if(!check){
        const entity: any = {
          name: "nam",
          pageFaceBookId: pageLongToken.data.access_token,
          longSecretKey: String(longToken.data.access_token.toString()),
          longPageSecretKey: "ok",
          userId:"65944403a75ca833135bc622"
        }
        console.log(await this.pageService.create(entity))
      }
      return this.pageService.findAll();
    } catch (error) {
      console.log(error)
      return 'fasjdf'
    }
  }

  async getAccessToken(code: string) {
    try {
      const data = await axios.get(process.env.GRAPH_FACEBOOK + "oauth/access_token", {
        params: {
          client_id: process.env.APP_ID,
          redirect_uri: process.env.URL,
          client_secret: process.env.KEY_SCRECT,
          code: code
        }
      })
      return data.data.access_token
    } catch (error) {
      console.log(error)
    }
  }

  getCode() {
    return process.env.LOGIN_FACEBOOK_URL
      + "?client_id="
      + process.env.APP_ID
      + "&redirect_uri="
      + process.env.URL
      + "&scope=pages_messaging,pages_manage_cta,pages_manage_instant_articles,pages_manage_engagement,pages_manage_metadata,pages_manage_posts,pages_read_engagement,pages_read_user_content,public_profile,manage_pages";
  }

  send(mess: string){
    axios.post("https://graph.facebook.com/v18.0/me/messages?access_token=EAAKtz8GDZChoBOZBG3EZBTC3auavjAuapIlgRjWS409dR7CraGJNZAsPorW61SxtHbPjoHZCu1BaxSMZARoOeH9D8vTMettXxCZBSuTLSm2BnaWKzrIUoSIJTWwlZBB3xHK3SHvelE6m7o2OZATP4IrWZAANi4hF7fCQASqcSL9CUZCTuQC7Q0ZB444zbLvDUjF0oGIjzYRXA0dcQLMPZAVMZD",{
      messaging_type: "RESPONSE",
      recipient: {
        id: "6561311933887293"
      },
      message: {
        text: mess
      }
    }).then(data => {
      return data;
    }).catch(err => {
      return "err"
    })
  }
}

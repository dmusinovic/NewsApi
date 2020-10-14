import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppSettingsService {
    private httpClient: HttpClient;
    private appSettings: AppSettings;
    constructor(handler: HttpBackend) {
        this.httpClient = new HttpClient(handler);
    }

    public load(): Promise<AppSettings> {

        const promise = this.httpClient.get<AppSettings>('./config/config.json')
            .toPromise()
            .then(settings => {
                this.appSettings = settings;
                return settings;
            });
        return promise;
    }

    public getAppConfig(): AppSettings {
        return this.appSettings;
    }
}

export interface AppSettings {
    baseUrl: string;
}

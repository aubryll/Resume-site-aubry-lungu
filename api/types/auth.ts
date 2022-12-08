export type UserOAuth = {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    created_at: number;
};

export interface RefreshTokenParams {
    refresh_token: string;
    grant_type: "refresh_token";
    scope?: string;
    client_id?: string;
    client_secret?: string;
}